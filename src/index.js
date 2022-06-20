import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import App from "./App"
import("./utils/network")
console.log(App)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
	<Provider store={store}>
		<App>1</App>
	</Provider>
)
