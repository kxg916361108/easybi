// webpack.dev.js
const {merge} = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
    mode: 'development', // 开发模式
    devServer: {
        open: false, // 编译完自动打开浏览器
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
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
})