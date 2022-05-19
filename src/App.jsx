import React from "react"
import { Spin } from "antd"
import classnames from "classnames"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import Test from "./views/test"
import NetworkError from "@components/NetworkError"
import styles from "./global.module.less"

const Home = React.lazy(() => import("./views/home"))

const App = props => {
	const refs = React.useRef(null)
	const [label] = React.useState("Click Me")
	const spinner_root = `${styles["h-screen"]}  ${styles["flex"]} ${styles["justify-center"]} ${styles["items-center"]}`
	const Spinner = () => (
		<div className={classnames(spinner_root)}>
			<Spin size="large" />
		</div>
	)

	setTimeout(() => {
		console.log(refs)
		refs.current.click()
	}, 100)

	return (
		<React.Fragment>
			<NetworkError>
				<React.Suspense fallback={<Spinner />}>
					<Test label={label} ref={refs} />
				</React.Suspense>
			</NetworkError>
		</React.Fragment>
	)
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(App)
