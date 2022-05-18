/**
 * @description: 监听网络，根据网络在线状态做不同的响应
 */

import Messager, { MESSAGE_EVENT_NAME_MAPS } from "./messager"

const networktListener = () => {
	if (!navigator.onLine) {
		Messager.send(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, {
			status: false
		})
	}
	window.addEventListener("online", () => {
		Messager.send(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, {
			status: true
		})
	})
	window.addEventListener("offline", () => {
		Messager.send(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, {
			status: false
		})
	})
}

networktListener()
