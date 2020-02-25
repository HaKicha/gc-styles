const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.js');
const path = require("path");


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './examples/index.html'),
        }),
        new webpack.DefinePlugin({
            SERVER_API_URL: JSON.stringify('/')
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [ new TerserPlugin({
            parallel: true,
            cache: true,
            extractComments: true,
            terserOptions: {
                ecma: 5,
                ie8: false,
                safari10: true,
                compress: true,
                warnings: true
            }
        }) ]
    }
});
