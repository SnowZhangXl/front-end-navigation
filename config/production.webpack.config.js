const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./base.webpack.config');

config.mode = 'production';

config.plugins.push(
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'template/index.html')
	})
);

config.externals = {
	vue: 'Vue',
	'element-ui': 'ELEMENT'
};

module.exports = config;
