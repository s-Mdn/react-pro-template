import React from "react"
import ReactDOM from "react-dom"
import { Spin } from "antd"
import "./index.less"

const Loading = props => {
	const dom = document.createElement("div")
	dom.className = "loading"
	document.body.appendChild(dom)
	return ReactDOM.createPortal(<Spin tip="加载中..." size="large" />, dom)
}
export default Loading
