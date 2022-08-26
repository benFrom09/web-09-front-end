const webpack = require('webpack');

const PORT = process.env.PORT || 3001;

const config = {
    mode:'development',
    output:{
        filename:'[name].[contenthash].js'
    },
    devtool:'inline-source-map',
    optimization:{
        minimize:false
    },
    plugins:[new webpack.HotModuleReplacementPlugin()],
};

module.exports = config;