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

import axios from "axios"

export class Instance {
	axiosInstance

	constructor(config) {
		this.axiosInstance = this.createInstance(config)
		this.interceptorsRequest()
		this.interceptorsResponse()
	}

	/**
	 * @decorators create axios object
	 * @param {object} request config
	 */
	createInstance(config) {
		return axios.create(config)
	}

	// 请求拦截器
	interceptorsRequest() {
		this.axiosInstance.interceptors.request.use(
			config => {
				console.log(config)
				return config
			},
			error => {
				return Promise.reject(error)
			}
		)
	}

	// 响应拦截器
	interceptorsResponse() {
		this.axiosInstance.interceptors.response.use(
			response => {
				return response
			},
			error => {
				return Promise.reject(error)
			}
		)
	}
}
