export const MESSAGE_EVENT_NAME_MAPS = {
	NETWORK_LINE: "network_line"
}

class Messager {
	send = (eventName, payload) => {
		document.dispatchEvent(
			new CustomEvent(eventName, {
				detail: {
					payload
				}
			})
		)
	}
	receive = (e, messageHandle) => {
		if (messageHandle) {
			const payload = e?.detail?.payload
			messageHandle(payload)
		}
	}
}
export default new Messager()
