'use strict';
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var OpenBrowserPlugin = require("open-browser-webpack-plugin");
var autoprefixer = require('autoprefixer');
var __ENV__ = require('./env.js');

var config = {
    entry: {
        index: [path.resolve('./', 'src/entry/index.js')]
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].[hash].js',
        publicPath: '',
        chunkFilename: "[name].[hash].js",
    },
    module: {
        loaders: [{
            test: /\.js|.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader!css-loader')
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=25000'
        }, {
            test: require.resolve('jquery'),
            loader: 'expose-loader?$!expose-loader?jQuery'
        }, {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'less-loader']
            })
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin(__ENV__),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({
                        browsers: ['> 0.01%']
                    })
                ]
            }
        }),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })
    ]
};

if (__ENV__.__DEV__) {
    config.devtool = 'eval-source-map';
    config.plugins.push(
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dist/vendor.manifest.json')
        }),
        new HtmlWebpackPlugin({
            title: 'spa-react-redux-template',
            template: path.resolve('./', 'src/entry/index.html'),
            favicon: path.resolve('./', 'src/asset/img/favicon.ico')
        }),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['vendor.dll.js'],
            append: false
        })
        // new OpenBrowserPlugin({
        //     url: 'http://localhost:9000'
        // }),
        // new webpack.HotModuleReplacementPlugin()
    );
} else if (__ENV__.__PROD__) {
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                comments: false,
            },
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            title: 'spa-react-redux-template',
            compile: true,
            template: path.resolve('./', 'src/entry/index.html'),
            favicon: path.resolve('./', 'src/asset/img/favicon.ico')
        })
    );
}

module.exports = config;
