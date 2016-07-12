var webpack = require('webpack');
module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot!babel'
		}],
		preLoaders: [{
			test: /\.js$/,
			loader: 'source-map-loader'
		}]
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.ts']
	},
	output: {
		path: 'dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};
