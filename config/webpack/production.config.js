const path              = require('path'),
    merge               = require('webpack-merge'),
    commonConfig        = require('./common.config'),
    UglifyJsPlugin      = require("uglifyjs-webpack-plugin"),
    OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
    MiniCssExtractPlugin= require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = merge(commonConfig, {
    output: {
        path: path.resolve(__dirname, '../../public'),
        filename: "bundle/prod-bundle.min.js",
    },
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        splitChunks: {
            // chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    // 'style-loader',
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // new stuff
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]-[hash:base64:8]'
                        }
                    },
                    'sass-loader'
                ],
            },
        ]
    },
    stats: {
        colors: true,
    },
    // added
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle/prod-bundle.css",
            chunkFilename: "[id].css"
        }),
    ],
});
