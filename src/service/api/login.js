import Request from "../index"

export const recommendProgram = data => {
	return Request({
		url: "/api/auth/pwd_sign_in",
		method: "POST",
		data: data,
		$options: {
			cancelRequest: true,
			inNeedLoad: true
		}
	})
}
