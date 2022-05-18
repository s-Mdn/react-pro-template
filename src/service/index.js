import Axios from "axios"
import _ from "lodash"
import { getToken } from "@utils"
import { Loading, removeLoading } from "./utils/loading"
import { addPendingRequest, removePendingRequest } from "./utils/cancelRepeatRquest"

class Request {
	axiosInstance
	cacheConfig
	methodList = ["post", "put", "get", "delete"]

	constructor() {
		this.axiosInstance = this.createdInstance()
		this.interceptorsRequest()
		this.interceptorsRespose()
	}

	createdInstance() {
		return Axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			timeout: 50000
		})
	}

	interceptorsRequest() {
		this.axiosInstance.interceptors.request.use(
			config => {
				getToken() && (config.headers["Authorization"] = getToken())

				if (_.toLower(config.method) === "get" || _.toLower(config.method) === "delete") {
					config.params = config.data
				} else {
					if (!this.methodList.includes(_.toLower(config.method))) {
						throw new Error("method does not exist")
					}
				}

				// loading效果
				Loading(config)

				// pendding 中的请求，后续请求不发送
				addPendingRequest(config)

				// 保存配置项，方便在响应拦截中的error函数使用
				this.cacheConfig = config

				return config
			},

			error => {
				removeLoading()
				removePendingRequest(this.cacheConfig)
				Promise.reject(error)
			}
		)
	}

	interceptorsRespose() {
		this.axiosInstance.interceptors.response.use(
			response => {
				removeLoading()
				removePendingRequest(response.config)

				return this.responseHandle[response.data.code || "default"](response)
			},

			error => {
				removeLoading()
				// 发生错误，并且不是取消请求返回的错误，需要移除请求
				const { message } = error // 这里message是对象是来自CancelToken构造函数cancel返回的config，所以接口对接的时候要注意返回，有冲突的话这里需要做修改
				if (typeof message !== "object") {
					removePendingRequest(this.cacheConfig)
				}

				return Promise.reject(error)
			}
		)
	}

	responseHandle = {
		200: response => {
			return response.data.data
		},
		401: response => {
			// 状态码过期
			localStorage.clear()
			window.parent.location.reload() // 刷新整个程序，相当于F5
		},
		default: response => {}
	}
}

const { axiosInstance } = new Request()
export default axiosInstance
