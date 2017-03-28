var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var InlineResourcePlugin = require('inline-resource-plugin')

var entryList = utils.scanEntryFile()
var webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({sourceMap: config.dev.cssSourceMap})
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin()
    ]
})

// add hot-reload related code to entry chunks
// Object.keys(baseWebpackConfig.entry).forEach(function (name) {
//   baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
// })
webpackConfig.entry = entryList;
Object.keys(entryList).forEach(function (name) {
    // add hot-reload related code to entry chunks
    webpackConfig.entry[name] = ['./build/dev-client'].concat(webpackConfig.entry[name]);
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            filename: name + '/index.html',
            template: './src/project/' + name + '/index.html',
            inject: true,
            chunks: [name]
        })
    );
    webpackConfig.plugins.push(
        new InlineResourcePlugin({
            compile: true,
            compress: false,
            rootpath: './src',
            template: './src/project/' + name + '/index.html',
            test: new RegExp('^' + name + '/index\\.html$')
        })
    );
});

module.exports = webpackConfig;
