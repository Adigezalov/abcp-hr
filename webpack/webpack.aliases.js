const { createWebpackAliases } = require('./webpack.helpers')

module.exports = createWebpackAliases({
	'@': 'src',
})
