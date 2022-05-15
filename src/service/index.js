// - 是否需要携带登录态、登录态失效重新刷新登录态
// - 请求失败时尝试重复发起、默认 3 次
// - 是否需要 loading
// - 是否需要统一的错误处理
// - 重复请求的拦截处理
// - 缓存的处理
// - 请求的取消处理
// - 支持多域名情况
// - 断网情况的处理
// - 错误信息的埋点统计
import Axios from "axios"
import _ from "lodash"
import { getToken } from "@utils"
import { addPendingRequest, removePendingRequest } from "./utils/cancelRepeatRquest"

const responseHandle = {
	200: response => {
		return response.data.data
	},
	401: response => {},
	default: response => {}
}

export const axios = Axios.create({
	baseURL: process.env.VUE_APP_BASEURL || "",
	timeout: 50000
})

axios.interceptors.request.use(
	config => {
		// 请求头用于接口token 认证
		getToken() && (config.headers["Authorization"] = getToken())
		if (_.toLower(config.method) === "post" || _.toLower(config.method) === "put") {
			config.data = config.data.data
		} else if (_.toLower(config.method) === "get" || _.toLower(config.method) === "delete") {
			config.params = config.data
		} else {
			throw new Error("method does not exist")
		}
		// pendding 中的请求，后续请求不发送（由于存放的peddingMap 的key 和参数有关，所以放在参数处理之后）
		addPendingRequest(config)
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		removePendingRequest(response)
		return responseHandle[response.data.code || "default"](response)
	},
	error => {
		return Promise.reject(error)
	}
)
