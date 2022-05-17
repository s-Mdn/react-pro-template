/**
 * @description: 监听网络
 */
import store from "@src/store"
import { network_online, network_offline } from "@src/store/action/network.action"

const networktListener = () => {
	window.addEventListener("online", () => {
		store.dispatch(network_online())
	})
	window.addEventListener("offline", () => {
		store.dispatch(network_offline())
	})
}

networktListener()
