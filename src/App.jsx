import React, { useState } from "react"
import { Input } from "antd"
import styles from "./App.module.less"
import { recommendProgram } from "@src/service/api"
import Loading from "@components/Loading"
const App = props => {
	const [account, setAccount] = useState()
	const [pas, setPas] = useState()
	const [show, setShow] = useState(false)
	const login = () => {
		setShow(!show)
		// const data = {
		// 	phone_num: account,
		// 	password: pas
		// }
		// recommendProgram(data)
	}
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				{show && <Loading />}
				<Input className={styles["w-60"]} value={account} onChange={e => setAccount(e.target.value)} />
				<p className="my-5"></p>
				<Input className={styles["w-60"]} value={pas} onChange={e => setPas(e.target.value)} />
				<button onClick={login}>登陆</button>
			</header>
		</div>
	)
}

export default App
