const Dotenv = require('dotenv-webpack');
const path = require( 'path' );
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css?$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.(png|j?g|svg|gif)?$/,
        use: 'file-loader?name=./images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html'
		}),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      systemvars: true
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/favicon.ico", to: "" },
        { from: "./src/manifest.json", to: "" },
        { from: "./src/logo192.png", to: "" },
        { from: "./src/logo512.png", to: "" },
      ],
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/src-sw.js",
      swDest: "sw.js",
    }),
	]
};
