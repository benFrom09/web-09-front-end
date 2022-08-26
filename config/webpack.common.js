const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { path } = require('path');
const commonPaths = require('./constant');

const config = {
    devServer: {
        historyApiFallback: true,
        host: 'localhost',
        open: true,
        compress: true,
        hot: true,
        port: 3001,
    },
    entry: `${commonPaths.appEntry}/index.js`,
    output: {
        path: commonPaths.outputPath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/],
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new Dotenv({
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack config',
            template: `${commonPaths.appEntry}/template.html`,//template file
            filename: 'index.html' // output file
        }),
        new CleanWebpackPlugin(),
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
}

module.exports = config;