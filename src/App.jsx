import React from "react"
import { Spin } from "antd"
import classnames from "classnames"
import Offline from "@components/Offline"
import styles from "./global.module.less"
import Messager, { MESSAGE_EVENT_NAME_MAPS } from "@utils/messager"

const Home = React.lazy(() => import("./views/home"))
const App = props => {
	const [onLine, setOnLine] = React.useState(true)

	React.useEffect(() => {
		document.addEventListener(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, onReceive)
		return () => {
			document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.NETWORK_LINE, onReceive)
		}
	})

	// 网络在线才发请求
	React.useEffect(() => {
		if (onLine) {
			console.log("打印了")
		}
	}, [onLine])

	// 接收订阅事件的传参
	const onReceive = e => {
		Messager.receive(e, data => {
			setOnLine(data?.status)
			if (data?.status) {
				window.location.reload()
			}
		})
	}

	const spinner_root = `${styles["h-screen"]}  ${styles["flex"]} ${styles["justify-center"]} ${styles["items-center"]}`
	const Spinner = () => (
		<div className={classnames(spinner_root)}>
			<Spin size="large" />
		</div>
	)

	return (
		<React.Fragment>
			{!onLine ? (
				<Offline />
			) : (
				<React.Suspense fallback={<Spinner />}>
					<Home />
				</React.Suspense>
			)}
		</React.Fragment>
	)
}

export default App
