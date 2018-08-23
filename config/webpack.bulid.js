let path = require("path");
let webpack = require("webpack");
let config = require("/config");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge"); //合并对象
const baseWebpack = require("./webpack.base.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = merge(baseWebpack, {
    devtool: config.bulid.devtool,
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common.js",
            filename: "js/common.js"
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                include: /\src/,
                compress: {
                    warning: false
                },
                sourceMap: config.bulid.uglifyJsSourceMap,
                parallel: true //使用多进程运行和文件缓存来提高构建速度
            }
        })
    ]
})