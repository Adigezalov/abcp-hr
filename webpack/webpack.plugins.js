const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = [
	new Dotenv({
		path: `./.env.${process.env.NODE_ENV}`,
	}),
	new HtmlWebpackPlugin({
		inject: true,
		scriptLoading: 'blocking',
		template: 'public/index.html',
		favicon: 'public/favicon.png',
	}),
].filter(Boolean)
