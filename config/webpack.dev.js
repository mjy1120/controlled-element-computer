let path = require("path");
let webpack = require("webpack");
let config = require("./config");
const merge = require("webpack-merge");
const baseWebpack = require("./webpack.base.js");
module.exports = merge(baseWebpack, {
    devServer: {
        contentBase: config.dev.outputPath,
        host: config.dev.host,
        port: config.dev.port,
        open: config.dev.browserOpen,
        before: config.dev.before,
        proxy: config.dev.proxy
    },
    devtool: config.dev.devtool
})