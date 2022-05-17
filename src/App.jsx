import React, { useState } from "react"
import { Input } from "antd"
import styles from "./App.module.less"
import { recommendProgram } from "@src/service/api"

const App = props => {
	const [account, setAccount] = useState()
	const [pas, setPas] = useState()

	const login = () => {
		const data = {
			phone_num: account,
			password: pas
		}
		console.log(data)
		recommendProgram(data)
	}
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				<Input value={account} onChange={e => setAccount(e.target.value)} />
				<p className="my-5"></p>
				<Input value={pas} onChange={e => setPas(e.target.value)} />
				<button onClick={login}>登陆</button>
			</header>
		</div>
	)
}

export default App
