import React from "react"

// // ref 转发
// // const Home = props => {
// // 	const reff = React.createRef()
// // 	const FancyButton = React.forwardRef((prop, ref) => {
// // 		return (
// // 			<button ref={ref} className="FancyButton">
// // 				{prop.children}
// // 			</button>
// // 		)
// // 	})
// // 	React.useEffect(() => {
// // 		console.log(reff)
// // 	})
// // 	return <FancyButton ref={reff}>Click me!</FancyButton>
// // }
// // export default Home

// // // ref 转发高阶组件中使用
// function logProps(WrappedComponent) {
// 	// class LogProps extends React.Component {
// 	// 	componentDidUpdate(prevProps) {
// 	// 		console.log("old props:", prevProps)
// 	// 		console.log("new props:", this.props)
// 	// 	}

// 	// 	render() {
// 	// 		const { forwardedRef, ...rest } = this.props
// 	// 		return <WrappedComponent ref={forwardedRef} {...rest} />
// 	// 	}
// 	// }

// 	return React.forwardRef((props, ref) => {
// 		return <WrappedComponent {...props} ref={ref} />
// 	})
// }

// class Home extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.props = props
// 	}

// 	render() {
// 		return <button className="Home">{this.props.label}</button>
// 	}
// }
// export default logProps(Home)

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

function Children({ number }) {
	console.log("子组件渲染")
	return <div>let us learn React! {number} </div>
}
export default class Test extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			numberA: 0,
			numberB: 0
		}
		this.component = <Children number={this.state.numberA} />
	}
	controllComponentRender = () => {
		/* 通过此函数判断 */
		const { props } = this.component
		if (props.number !== this.state.numberA) {
			/* 只有 numberA 变化的时候，重新创建 element 对象  */
			return (this.component = React.cloneElement(this.component, { number: this.state.numberA }))
		}
		return this.component
	}
	render() {
		return (
			<div>
				{/* <Children number={this.state.numberA} /> */}
				{this.controllComponentRender()}
				<button onClick={() => this.setState({ numberA: this.state.numberA + 1 })}>
					改变numberA -{this.state.numberA}{" "}
				</button>
				<button onClick={() => this.setState({ numberB: this.state.numberB + 1 })}>
					改变numberB -{this.state.numberB}
				</button>
			</div>
		)
	}
}
