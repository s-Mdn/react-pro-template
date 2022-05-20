import React from "react"
import "./index.less"

// ref 转发
// const Home = props => {
// 	const reff = React.createRef()
// 	const FancyButton = React.forwardRef((prop, ref) => {
// 		return (
// 			<button ref={ref} className="FancyButton">
// 				{prop.children}
// 			</button>
// 		)
// 	})
// 	React.useEffect(() => {
// 		console.log(reff)
// 	})
// 	return <FancyButton ref={reff}>Click me!</FancyButton>
// }
// export default Home

// // ref 转发高阶组件中使用
// function logProps(WrappedComponent) {
// 	class LogProps extends React.Component {
// 		componentDidUpdate(prevProps) {
// 			console.log("old props:", prevProps)
// 			console.log("new props:", this.props)
// 		}

// 		render() {
// 			const { forwardedRef, ...rest } = this.props
// 			console.log("forwardedRef--->", forwardedRef)
// 			return <WrappedComponent ref={forwardedRef} {...rest} />
// 		}
// 	}

// 	return React.forwardRef((props, ref) => {
// 		console.log("ref--->", ref)
// 		return <LogProps {...props} forwardedRef={ref} />
// 	})
// }

// class Home extends React.Component {
// 	focus() {
// 		console.log("聚焦了")
// 	}

// 	render() {
// 		return <button className="FancyButton">{this.props.label}</button>
// 	}
// }
// export default logProps(Home)

// 如何组件是被按需加载，那就会出现无法拿到ref,请注意该点
function HOC(Component) {
	class Wrap extends React.Component {
		render() {
			const { forwardedRef, ...otherprops } = this.props
			return <Component forwardedRef={forwardedRef} {...otherprops} />
		}
	}
	return React.forwardRef((props, ref) => {
		return <Wrap forwardedRef={ref} {...props} />
	})
}

class Index extends React.Component {
	fucus() {
		console.log("打印了")
	}
	render() {
		return <div ref={this.props.forwardedRef}>hello,world</div>
	}
}

const HocIndex = HOC(Index)

export default HocIndex

// export default Index
// export default () => {
// 	const node = React.useRef(null)
// 	React.useEffect(() => {
// 		console.log(node.current) /* Index 组件实例  */
// 	}, [])
// 	return (
// 		<div>
// 			<HocIndex ref={node} />
// 		</div>
// 	)
// }
// function Son(props, ref) {
// 	const inputRef = React.useRef(null)
// 	const [inputValue, setInputValue] = React.useState("")

// 	React.useImperativeHandle(
// 		ref,
// 		() => {
// 			const handleRefs = {
// 				onFocus() {
// 					/* 声明方法用于聚焦input框 */
// 					inputRef.current.focus()
// 				},
// 				onChangeValue(value) {
// 					/* 声明方法用于改变input的值 */
// 					setInputValue(value)
// 				}
// 			}
// 			return handleRefs
// 		},
// 		[]
// 	)

// 	return (
// 		<div>
// 			<input placeholder="请输入内容" ref={inputRef} value={inputValue} />
// 		</div>
// 	)
// }

// const ForwarSon = React.forwardRef(Son)

// class Index extends React.Component {
// 	cur = null
// 	handerClick() {
// 		const { onFocus, onChangeValue } = this.cur
// 		onFocus() // 让子组件的输入框获取焦点
// 		onChangeValue("let us learn React!") // 让子组件input
// 	}
// 	render() {
// 		return (
// 			<div style={{ marginTop: "50px" }}>
// 				<ForwarSon ref={cur => (this.cur = cur)} />
// 				<button onClick={this.handerClick.bind(this)}>操控子组件</button>
// 			</div>
// 		)
// 	}
// }

// export default Index
