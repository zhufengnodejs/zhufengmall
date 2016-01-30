var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: ["./app.js"],
    externals: {
        'jQuery':'jQuery'
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
            },
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        })
    ],
    resolve: {
        root: [
            path.resolve('./src') //指定根路径
        ],
        extensions:['','.js','.css']
        //root: [path.resolve(__dirname, 'js')]
    }
}