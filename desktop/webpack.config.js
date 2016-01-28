var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: ["./app.js"],
    externals: {
        'angular': 'angular',
        "jquery" : "jQuery",
        "bootstrap" : "bootstrap"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: '/dist/'
    },
    module: {
        loaders: [
            {
                test: /\.jade$/,
                loader: 'jade',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style!css" ,
                exclude: /node_modules/
            },
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js?$/,
                query: {
                    presets: ['es2015'],
                },
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style!css!less?strictMath&noIeCompat"
            }
        ]
    },
    resolve: {
        root: [
            path.resolve('./src') //指定根路径
        ],
        extensions:['','.js','.css']
        //root: [path.resolve(__dirname, 'js')]
    }
}