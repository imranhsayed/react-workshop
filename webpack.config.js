const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		})
	]
};
