module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es6: true
	},
	parserOptions: {
		sourceType: "module"
	},

	rules: {
		"prettier/prettier": 2,
		eqeqeq: ["error", "always", { null: "ignore" }],
		curly: 2,
		"spaced-comment": 2,
		"comma-spacing": 2,
		"no-redeclare": 2,
		"no-alert": 2,
		"no-shadow": 2,
		"no-this-before-super": 2,
		"use-isnan": 2,
		"no-spaced-func": 2,
		"init-declarations": 2,
		"prefer-template": 2
	},
	extends: ["react-app", "react-app/jest", "eslint-config-prettier"],
	plugins: ["prettier", "eslint-plugin-prettier"]
}
