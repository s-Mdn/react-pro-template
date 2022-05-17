import React from "react"
import { Button } from "antd"
import styles from "./App.module.less"
import { recommendProgram } from "@src/service/api"

const App = props => {
	const http = async () => {
		Promise.all([recommendProgram()]).then(r => {})
	}
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				<Button type="primary" onClick={http}>
					按钮
				</Button>
			</header>
		</div>
	)
}

export default App
