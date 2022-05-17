// - 是否需要携带登录态、登录态失效重新刷新登录态
// - 请求失败时尝试重复发起、默认 3 次
// - 是否需要 loading
// - 是否需要统一的错误处理
// - 重复请求的拦截处理(已完成)
// - 请求的取消处理(已完成)
// - 断网情况的处理(进行中)
// - 错误信息的埋点统计

import Axios from "axios"
import _ from "lodash"
import { getToken } from "@utils"
import { addPendingRequest, removePendingRequest } from "./utils/cancelRepeatRquest"
import responseHandle from "./utils/responseHandle"

export const axios = Axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 50000
})

let cacheConfig = null
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

		// pendding 中的请求，后续请求不发送
		addPendingRequest(config)
		cacheConfig = config
		return config
	},
	error => {
		// 移除请求
		removePendingRequest(cacheConfig)
		return Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		// 移除请求
		removePendingRequest(response.config)
		return responseHandle[response.data.code || "default"](response)
	},
	error => {
		// 发生错误，并且不是取消请求返回的错误，需要移除请求
		const { message } = error // 这里message是对象是来自CancelToken构造函数cancel返回的config，所以接口对接的时候要注意返回，有冲突的话这里需要做修改
		if (typeof message !== "object") {
			removePendingRequest(cacheConfig)
		}
		return Promise.reject(error)
	}
)
