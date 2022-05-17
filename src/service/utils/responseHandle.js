export default {
	200: response => {
		return response.data.programs
	},
	401: response => {
		// 状态码过期
		localStorage.clear()
		window.parent.location.reload() // 刷新整个程序，相当于F5
	},
	default: response => {}
}
