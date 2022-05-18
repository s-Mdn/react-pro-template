import React from "react"
import classnames from "classnames"
import styles from "../../global.module.less"

const Offline = props => {
	const container_style = {
		background: "rgb(32,33, 36)",
		color: "rgb(154, 160, 166)"
	}
	const head_title_style = {
		fontSize: "1.6rem",
		color: "rgb(154, 160, 166)"
	}

	const container = `${styles["h-screen"]} ${styles["flex"]} ${styles["justify-center"]} ${styles["items-center"]}`
	const head_title = `${styles["font-medium"]}`
	const content_style = `${styles["text-index-2rem"]}`
	return (
		<React.Fragment>
			<div className={classnames(container)} style={container_style}>
				<div>
					<h2 className={classnames(head_title)} style={head_title_style}>
						未连接到互联网
					</h2>
					<div>
						<span>请试试以下办法：</span>
						<ul className={classnames(content_style)}>
							<li>检查网线、调制解调器和路由器</li>
							<li>重新连接到 Wi-Fi 网络</li>
						</ul>
					</div>
					<p>ERR_INTERNET_DISCONNECTED</p>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Offline
