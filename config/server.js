/**
 * 启动开发环境服务器
 */
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');
var path = require('path');

var __SERVER__ = {
    host: 'localhost',
    port: 9000
}

// modify some webpack config options
// 无法自动更新 css
// webpackConfig.entry.index.unshift(
//     `webpack-dev-server/client?http://${__SERVER__.host}:${__SERVER__.port}/`,
//     "webpack/hot/dev-server"
// );

var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'dist/',
    hot: true,
    host: __SERVER__.host,
    port: __SERVER__.port,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true
})

server.listen(__SERVER__.port);
