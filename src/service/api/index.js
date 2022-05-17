import { axios as request } from "../index"

export const recommendProgram = data => {
	return request({
		url: "/api/auth/pwd_sign_in",
		method: "POST",
		data: { data },
		$options: {
			cancelRequest: true
		}
	})
}
