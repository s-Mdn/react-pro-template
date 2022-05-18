import React, { useState } from "react"
import { connect } from "react-redux"
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
		recommendProgram(data)
	}

	return (
		<React.Fragment>
			<div className={styles.app}>
				<header className={styles["app-header"]}>
					<Input className={styles["w-60"]} value={account} onChange={e => setAccount(e.target.value)} />
					<p className="my-5"></p>
					<Input className={styles["w-60"]} value={pas} onChange={e => setPas(e.target.value)} />
					<button onClick={login}>登陆</button>
				</header>
			</div>
		</React.Fragment>
	)
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})
export default connect(mapStateToProps, mapDispatchToProps)(App)
