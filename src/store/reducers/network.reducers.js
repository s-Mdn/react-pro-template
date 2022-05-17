import { NET_WORK_ONLINE, NET_WORK_OFFLINE } from "../const/network.const"

const initialState = {
	isConnect: true
}

export default (state = initialState, action) => {
	switch (action.type) {
		case NET_WORK_ONLINE:
			return {
				...state,
				isConnect: true
			}
		case NET_WORK_OFFLINE:
			return {
				...state,
				isConnect: false
			}
		default:
			return state
	}
}
