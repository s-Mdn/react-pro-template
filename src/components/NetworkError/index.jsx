import React from "react"
import Offline from "../Offline"
import Messager, { MESSAGE_EVENT_NAME_MAPS } from "@utils/messager"

const NetworkError = props => {
	const { children } = props
	const [onLine, setOnLine] = React.useState(true)

	React.useEffect(() => {
		document.addEventListener(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, onReceive)
		return () => {
			document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, onReceive)
		}
	})

	// 接收订阅事件的传参
	const onReceive = e => {
		Messager.receive(e, data => {
			setOnLine(data?.status)
			if (data?.status) {
				window.parent.location.reload()
			}
		})
	}

	return (
		<React.Fragment>
			{!onLine && <Offline />}
			{onLine && children}
		</React.Fragment>
	)
}
export default NetworkError
