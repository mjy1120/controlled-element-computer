let path = require("path");
var api = require("../mock");
module.exports = {
    base: {
        entry: path.join(__dirname, "../src/main.js"),
        outputPath: path.join(__dirname, "../dist"),
        outputFileName: "[id]-[name]-[hash].js",
        templatePath: './src/index.html',
        htmlMinify: {
            removeComments: true, //去除注释
            collapseWhitespace: true, //去除空格
            removeAttributeQuotes: true, //移出属性的引号
            removeEmptyAttributes: true //去除空属性
        }
    },
    dev: {
        host: "localhost",
        port: 8010,
        browserOpen: false,
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                pathRewrite: { "^/apis": "api" },
                secure: false
            }
        },
        before: api
    },
    bulid: {
        uglifyJsSourceMap: false,
        devtool: false
    },
    babel: {
        presets: [
            ["env", { modules: false }],
            "stage-0",
            "react"
        ]
    }
}