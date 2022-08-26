/**
 * original webpack.config.js befor splitting
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = {
    mode:'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 3001,
      },
    output: {
        path: path.resolve(__dirname, './dist'),
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
        new HtmlWebpackPlugin({
            title: 'Webpack config',
            template: path.resolve(__dirname, './src/template.html'),//template file
            filename: 'index.html' // output file
        }),
        new CleanWebpackPlugin(),
         // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],
}