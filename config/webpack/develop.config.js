const path              = require('path'),
    merge               = require('webpack-merge'),
    commonConfig        = require('./common.config'),
    HtmlWebpackPlugin   = require('html-webpack-plugin'),
    MiniCssExtractPlugin= require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = merge(commonConfig, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // "style-loader", // creates style nodes from JS strings
                    // devMode ? MiniCssExtractPlugin.loader : 'style-loader',
                    // translates CSS into CommonJS
                    {
                        loader: "css-loader",
                        options: {
                            // modules: true,
                            // localIdentName: '[local]-[hash:base64:8]'
                        }
                    },
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/',
        contentBase: path.resolve(__dirname, '../../public')
    },
    output: {
        path: path.resolve(__dirname, '../../public'),
        filename: devMode? './bundle/dev-bundle.[hash].js' : './bundle/bundle.js'
    },
    devtool: '#inline-source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle/dev-bundle.[hash].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../../src/index.html')
        })
    ]
});
