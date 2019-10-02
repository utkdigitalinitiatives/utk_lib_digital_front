require("@babel/polyfill");
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "lodash": "_"
    },
    entry: [
        './index.js'
    ],
    output: {
        filename: 'header.js',
    },
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader" // translates CSS into CommonJS
                            },
                            {
                                loader: "sass-loader" // compiles Sass to CSS
                            }
                        ],
                        fallback: "style-loader" // used when css not extracted
                    }
                ))
            },
            {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
                use: 'url-loader'
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {

                test: /\.(png|gif|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: path.resolve(__dirname, 'src/media'),
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        new ExtractTextPlugin({filename: 'header.css', allChunks: true}),

        new HtmlWebPackPlugin({
            template: path.join(__dirname, "./src/index.html"),
            filename: "./index.html"
        })
    ],
};
