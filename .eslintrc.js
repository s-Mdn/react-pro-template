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
		"prefer-template": 1
	},
	extends: ["react-app", "react-app/jest", "prettier"],
	plugins: ["eslint-plugin-prettier"]
}
