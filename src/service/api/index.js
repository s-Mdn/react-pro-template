import { axios as request } from "../index"

export const recommendProgram = data => {
	return request({
		url: "/api/program/recommend",
		method: "GET",
		cancelRequest: true
	})
}

// export const privateContent = data => {
// 	return request({
// 		url: "/personalized/privatecontent",
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json"
// 		},
// 		cancelRequest: true,
// 	})
// }
