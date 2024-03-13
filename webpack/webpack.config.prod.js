const path = require('path')
module.exports = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	module: {
		rules: require('./webpack.rules'),
	},
	output: {
		clean: true,
		publicPath: '/',
		path: path.resolve(__dirname, '../build'),
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	plugins: [...require('./webpack.plugins')],
	resolve: {
		extensions: ['*', '.js', '.ts', '.jsx', '.tsx', '.css'],
		alias: {
			...require('./webpack.aliases'),
		},
	},
	optimization: {
		minimize: true,
		sideEffects: true,
		concatenateModules: true,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 10,
			minSize: 0,
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
				},
			},
		},
	},
}
