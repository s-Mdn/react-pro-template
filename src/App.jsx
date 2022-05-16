import React from "react"
import { Button } from "antd"
import { axios } from "./service/index"
import styles from "./App.module.less"

const App = props => {
	const http = () => {
		return axios({
			url: "/api/program/recommend",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
			cancelRequest: true
		})
	}
	const res = async () => {
		const r = await http()
		console.log(r)
	}
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				<Button type="primary" onClick={res}>
					按钮
				</Button>
			</header>
		</div>
	)
}

export default App
