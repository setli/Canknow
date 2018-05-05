const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const package=require('./../../package');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './../src/vue/index.js'
    },
    output: {
        path: path.resolve(__dirname, './../../dist/js'),
        publicPath: './../dist',
        filename:  package.name+'.js',
        libraryTarget: "umd",
        library:  package.name
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});
