import React, { useEffect } from "react"
import { Button } from "antd"
import { axios } from "./service/index"
import styles from "./App.module.less"

const App = props => {
	const http = () => {
		return axios({
			url: "./user.json",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			}
		})
	}
	const res = async () => {
		const r = await http()
		console.log(r)
	}
	useEffect(() => {
		res()
	})
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				<Button type="primary">按钮</Button>
				<p className={styles["text-black"]}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className={styles["app-link"]} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
