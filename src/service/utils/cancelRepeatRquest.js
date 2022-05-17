/**
 * @description 取消重复的请求
 * 取消 B 请求，只发出 A 请求
 */
import Axios from "axios"
import { generateReqKey } from "./generateReqKey"

// addPendingRequest：用于把当前请求信息添加到pendingRequest对象中
const pendingRequest = new Map()

export function addPendingRequest(config) {
	if (config.$options.cancelRequest) {
		const requestKey = generateReqKey(config)
		if (pendingRequest.has(requestKey)) {
			config.cancelToken = new Axios.CancelToken(cancel => {
				// cancel 函数的参数会作为 promise 的 error 被捕获
				cancel(config)
			})
		} else {
			config.cancelToken =
				config.cancelToken ||
				new Axios.CancelToken(cancel => {
					pendingRequest.set(requestKey, cancel)
				})
		}
	}
}

// removePendingRequest：检查是否存在重复请求，若存在则取消已发的请求。
export function removePendingRequest(config) {
	if (config.$options.cancelRequest) {
		const requestKey = generateReqKey(config)
		// 判断是否有这个 key
		if (pendingRequest.has(requestKey)) {
			const cancelToken = pendingRequest.get(requestKey)
			cancelToken(requestKey)
			pendingRequest.delete(requestKey)
		}
	}
}
