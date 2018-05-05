const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const package = require('../../package.json');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const config = require('./config/index');
const utils = require('./../utils');

module.exports = merge(webpackBaseConfig, {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            canknow: '../../src/vue/index',
        }
    },
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js'),
        publicPath: config.build.assetsPublicPath
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Compress extracted CSS. We are using this plugin so that possible
        // duplicated CSS from different components can be deduped.
        new OptimizeCSSPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendor.bundle.js',
            minChunks:Infinity
        }),
        new HtmlWebpackPlugin({
            title: package.name+' v' + package.version,
            inject: true,
            path: config.build.assetsPublicPath + config.build.assetsSubDirectory,
            favicon: path.resolve('favicon.ico'),//解析的是相对项目根目录
            stylePath: config.build.assetsPublicPath + config.build.assetsSubDirectory+'/canknow',
            filename: path.join(__dirname, './../../example/dist/index.html'),
            template: path.join(__dirname, './../../example/src/index.html')
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../../example/static'),
            to: config.build.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
});
