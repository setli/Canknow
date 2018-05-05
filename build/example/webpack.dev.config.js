const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const package = require('../../package.json');
const config = require('./config/index');

module.exports = merge(webpackBaseConfig, {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            canknow: '../../src/vue/index',
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendor.bundle.js',
            minChunks:Infinity
        }),
        new HtmlWebpackPlugin({
            title: package.name+' v' + package.version,
            inject: true,
            path: config.dev.assetsPublicPath + config.dev.assetsSubDirectory,
            favicon: path.resolve('favicon.ico'),//解析的是相对项目根目录
            stylePath: config.dev.assetsPublicPath + config.dev.assetsSubDirectory+'/canknow',
            filename: path.join(__dirname, './../../example/dist/index.html'),
            template: path.join(__dirname, './../../example/src/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
