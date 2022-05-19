import React from "react"
import logProps from "../home"

class FancyButton extends React.Component {
	print() {
		console.log("打印了")
	}
	render() {
		return (
			<button className="FancyButton" ref={this.props.forwardedRef} onClick={this.print}>
				{this.props.label}
			</button>
		)
	}
}
export default logProps(FancyButton)
