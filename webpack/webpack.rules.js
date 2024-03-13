module.exports = [
	{
		test: /\.tsx?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			options: {
				transpileOnly: true,
			},
		},
	},
	{
		test: /\.css$/,
		use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
	},
	{
		test: /\.s[ac]ss$/i,
		use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }],
	},
	{
		test: /\.(png|svg|jpg|jpeg|gif)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name: '[name].[ext]',
				},
			},
		],
	},
	{
		test: /\.(woff|woff2|eot|ttf|otf)$/i,
		use: [
			{
				loader: 'file-loader',
				options: {
					outputPath: 'fonts',
					name: '[name].[ext]',
				},
			},
		],
	},
]
