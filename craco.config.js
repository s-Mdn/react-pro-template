const path = require("path")
module.exports = {
	style: {
		modules: {
			localIdentName: "[name]__[local]__[hash:base64:5]"
		},
		postcssOptions: {
			// options 已经不适用
			plugins: [require("tailwindcss"), require("autoprefixer")]
		}
	},
	webpack: {
		alias: {
			"@src": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@utils": path.resolve(__dirname, "./src/utils")
		},
		extensions: [".js", ".jsx"]
	},
	babel: {
		plugins: [
			["import", { libraryName: "antd", libraryDirectory: "es", style: true }, "antd"],
			["@babel/plugin-proposal-decorators", { legacy: true }],
			[
				"babel-plugin-react-css-modules",
				{
					exclude: "node_modules",
					webpackHotModuleReloading: true,
					generateScopedName: "[name]__[local]__[hash:base64:5]",
					autoResolveMultipleImports: true,
					filetypes: {
						".less": { syntax: "postcss-less" }
					}
				}
			]
		]
	},
	plugins: [
		{
			plugin: require("craco-less"),
			options: {
				lessLoaderOptions: {
					lessOptions: {
						javascriptEnabled: true
					}
				}
			}
		}
	]
	// devServer: {
	// 	proxy: {
	// 		[process.env.REACT_APP_API_URL]:{
	// 			target: "http://47.106.112.61:8080",
	// 			changeOrigin: true,
	// 			logLevel: "debug",
	// 			pathRewrite: { [process.env.REACT_APP_API_URL]: "" },
	// 		}
	// 	}
	// }
}
