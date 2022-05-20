import React, { useEffect, useRef, useState } from "react"
import { Spin } from "antd"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import NetworkError from "@components/NetworkError"
import styles from "./global.module.less"

// const Home = React.lazy(() => import("./views/home"))
import Home from "./views/home"

const App = props => {
	const node = useRef(null)
	const [label] = useState("Click Me")
	const spinner_root = `${styles["h-screen"]}  ${styles["flex"]} ${styles["justify-center"]} ${styles["items-center"]}`
	const Spinner = () => (
		<div className={classnames(spinner_root)}>
			<Spin size="large" />
		</div>
	)

	// ref 转发高阶组件中使用
	useEffect(() => {
		console.log(node.current)
	}, [node])

	return (
		<React.Fragment>
			<NetworkError>
				<React.Suspense fallback={<Spinner />}>
					{/* ref 转发 */}
					{/* <Home label={label} /> */}
					<Home label={label} ref={node} />
					{/* ref 转发高阶组件中使用 */}
					{/* <Home /> */}
				</React.Suspense>
			</NetworkError>
		</React.Fragment>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
