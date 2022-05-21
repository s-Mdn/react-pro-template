import React from "react"
import ReactDOM from "react-dom/client"
import { Spin } from "antd"

export const Loading = config => {
	if (!config.$options.inNeedLoad) {
		return false
	}

	const dom = document.createElement("div")
	dom.setAttribute("id", "loading")
	document.body.appendChild(dom)
	const root = ReactDOM.createRoot(document.getElementById("loading"))
	root.render(<Spin tip="加载中..." size="large" />, dom)
}

export const removeLoading = () => {
	const loading = document.getElementById("loading")
	if (loading) {
		loading.remove()
	}
}
