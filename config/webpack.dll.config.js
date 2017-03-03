'use strict';
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'redux-thunk',
            'react-router',
            'react-router-redux',
            'redux-logger',
            'classnames',
            'lodash',
            'keymirror',
            'mockjs',
            'antd',
            'axios',
            'pretender',
            'redux-devtools',
            'redux-devtools-log-monitor',
            'redux-devtools-dock-monitor'
        ],
    },
    output: {
        path: path.resolve('./', 'dist'),
        filename: '[name].dll.js',
        library: '[name]',
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve('./dist/', 'vendor.manifest.json'),
            name: '[name]',
            context: __dirname,
        })
    ],
    stats: {
        cached: true,
        chunks: false,
        colors: true
    }
};