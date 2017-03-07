/**
 * 启动开发环境服务器
 */
'use strict';
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var webpackConfig = require('./webpack.config.js');

// modify some webpack config options
// 无法自动更新 css
webpackConfig.entry.index.unshift(
    "webpack-dev-server/client?http://localhost:9000/",
    "webpack/hot/dev-server"
);

var myConfig = Object.create(webpackConfig);
var server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    contentBase: 'dist/',
    hot: true,
    port: 9000,
    stats: {
        chunks: false,
        children: false,
        colors: true
    },
    historyApiFallback: true,
    proxy: {
        "/api": {
            target: "http://localhost:9001",
            pathRewrite: {"^/api" : ""}
        }
    }
})

server.listen(9000);
