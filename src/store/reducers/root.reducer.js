import { combineReducers } from "redux"
import NetworkReducers from "./network.reducers"

export default combineReducers({
	network: NetworkReducers
})
