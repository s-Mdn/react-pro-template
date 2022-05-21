import React from "react"
import { Spin } from "antd"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import NetworkError from "@components/NetworkError"
import styles from "./global.module.less"

const Home = React.lazy(() => import("./views/Tset"))

const App = props => {
	const node = React.useRef(null)
	const spinner_root = `${styles["h-screen"]}  ${styles["flex"]} ${styles["justify-center"]} ${styles["items-center"]}`
	const Spinner = () => (
		<div className={classnames(spinner_root)}>
			<Spin size="large" />
		</div>
	)

	// ref 转发高阶组件中使用
	// React.useEffect(() => {
	// 	console.log(node)
	// }, [])

	return (
		<React.Fragment>
			<NetworkError>
				<React.Suspense fallback={<Spinner />}>
					{/* ref 转发 */}
					{/* <Home label="click me" /> */}
					{/* 由于 Suspense 的原因，在 useEffect 无法获取ref */}
					{/* <Home ref={node} label="click me" /> */}
					<Home />
				</React.Suspense>
			</NetworkError>
		</React.Fragment>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
