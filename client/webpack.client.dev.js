const path = require('path')
const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals'); // ignore node_modules
var dotenv = require('dotenv')

function getPlugins() {
    /*Parse environment vars(they have to be compiled by webpack to work on client)*/
    const env = dotenv.config({ path: '../config/variables.dev.env'}).parsed
    /* Turn them into a nice object */
    const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
    }, {});

    const plugins = []
    plugins.push(new webpack.DefinePlugin(envKeys))

    return plugins
}
console.log(path.resolve(__dirname, 'static'))

module.exports = {
    /* Tell webpack the root file of our app */
    entry: './index.js',
    mode: "development",

    /* Tell webpack to put output file into ./dist/client.js. */
    output: {
	path: path.resolve(__dirname, 'static'),
	filename: 'client.js',
    },

    devServer: {
        // Serve dist folder on /
	contentBase: "static",
	publicPath: '/',
	overlay: true,
	hot:false,
	// Serve index.html on all the routes
	historyApiFallback: {
	    index: 'index.html'
	}
    },
    module: {
	rules: [
	    {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
		    loader: "babel-loader",
		    options: {
			presets: ["@babel/env", "@babel/react"],
			plugins: [
			    /* To enable state = {} */
			    "@babel/plugin-proposal-class-properties",
			]
		    },
		}
	    },
	    {
		test: /\.s[ac]ss$/i,
		use: [
		    // Creates `style` nodes from JS strings
		    'style-loader',
		    // Translates CSS into CommonJS
		    'css-loader',
		    // Compiles Sass to CSS
		    'sass-loader',
		],
	    },
	    {
		test: /\.md$/,
		loader: 'raw-loader',
            },
	    {
		test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
		use: [
		    {
			loader: 'file-loader',
			options: {
			    name: '[name].[ext]',
			    outputPath: 'fonts/'
			}
		    }
		]
	    }  
	]
    }
//    plugins: getPlugins()    
}
