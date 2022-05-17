export default {
	200: response => {
		return response.data.programs
	},
	401: response => {},
	default: response => {}
}
