const TokenKey = "Authorization"

export function getToken() {
	return localStorage.getItem(TokenKey)
}

export function setToken(token) {
	return localStorage.setItem(TokenKey, token)
}
