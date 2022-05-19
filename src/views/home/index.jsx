import React from "react"

// ref 转发
// const Home = props => {
// 	const refs = React.createRef()
// 	const FancyButton = React.forwardRef((prop, ref) => {
// 		return (
// 			<button ref={ref} className="FancyButton">
// 				{prop.children}
// 			</button>
// 		)
// 	})
// 	React.useEffect(() => {
// 		console.log(refs)
// 	})
// 	return <FancyButton ref={refs}>Click me!</FancyButton>
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
// 			return <WrappedComponent {...this.props} />
// 		}
// 	}

// 	return LogProps
// }

// class Home extends React.Component {
// 	focus() {}

// 	render() {
// 		return <button className="FancyButton">{this.props.label}</button>
// 	}
// }
// export default logProps(Home)

function logProps(Component) {
	class LogProps extends React.Component {
		componentDidUpdate(prevProps) {
			console.log("old props:", prevProps)
			console.log("new props:", this.props)
		}

		render() {
			console.log(Component.name, Component.displayName)
			const { forwardedRef, ...rest } = this.props

			// 将自定义的 prop 属性 “forwardedRef” 定义为 ref
			return <Component forwardedRef={forwardedRef} {...rest} />
		}
	}

	function forwardRef(props, ref) {
		return <LogProps {...props} forwardedRef={ref} />
	}

	// 在 DevTools 中为该组件提供一个更有用的显示名。
	// 例如 “ForwardRef(logProps(MyComponent))”
	// const name = Component.displayName || Component.name
	// forwardRef.displayName = `logProps-(${name})`

	// 注意 React.forwardRef 回调的第二个参数 “ref”。
	// 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
	// 然后它就可以被挂载到被 LogProps 包裹的子组件上。
	return React.forwardRef(forwardRef)
}
export default logProps
