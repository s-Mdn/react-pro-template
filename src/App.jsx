import styles from "./App.module.less"
import { Button } from "antd"

const App = () => {
	return (
		<div className={styles.App}>
			<header className={styles["App-header"]}>
				<Button type="primary">按钮</Button>
				<p className={styles["text-black"]}>
					Edit <code>src/App.js</code> and save to reload1.
				</p>
				<a className={styles["App-link"]} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
