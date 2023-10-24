// webpack.prod.js
const {merge} = require('webpack-merge');
const base = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = merge(base, {
    mode: 'production', // 生产模式
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['postcss-preset-env', {}]
                                ]
                            },
                        },
                    },
                    'less-loader',
                ],
                // 排除 node_modules 目录
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        // CSS抽取
        new MiniCssExtractPlugin({
            filename: 'assets/css/[hash:8].css'
        }),
        // CSS压缩
        new CssMinimizerPlugin(),
    ]
})