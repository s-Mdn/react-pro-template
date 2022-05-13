import styles from "./App.module.less"
import { Button } from "antd"

const App = props => {
	return (
		<div className={styles.app}>
			<header className={styles["app-header"]}>
				<Button type="primary">按钮</Button>
				<p className={styles["text-black"]}>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className={styles["app-link"]}
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	)
}

export default App
