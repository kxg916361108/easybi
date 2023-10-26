const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下
        filename: '[name].[hash:8].js', // 打包的文件名
        environment: {
            arrowFunction: false //禁用箭头函数
        }
    },
    module: {
        rules: [
            {
                test: /.(jsx?)|(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: 'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                                    useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                                    corejs: 3, // 使用 core-js@3 版本
                                },
                            ],
                            ['@babel/preset-typescript'],
                            ['@babel/preset-react'],
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: `[name].[ext]`,
                            // //限制打包图片的大小：
                            // //如果大于或等于2000Byte，则按照相应的文件名和路径打包图片；如果小于2000Byte，则将图片转成base64格式的字符串。
                            // name: 'img/[name].[hash:8].[ext]',
                            // //img:图片打包的文件夹；
                            // //[name].[ext]：设定图片按照本来的文件名和扩展名打包，不用进行额外编码
                            // //[hash:8]：一个项目中如果两个文件夹中的图片重名，打包图片就会被覆盖，加上hash值的前八位作为图片名，可以避免重名。
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/i,  //字体解析的配置
                use: [
                    {
                        loader: 'url-loader',
                    },
                ],
            },
            {
                test: /\.(json)$/,
                loader: 'json-loader',
                type: 'javascript/auto', //需要添加该配置，否则Json文件不会被推断成JavaScript模块，导致JSON文件解析报错
            },

        ],
    },
    plugins: [
        // 每次编译时会清除上次编译结果
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html')
        })

    ],
    performance: {
        hints: 'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function (assetFilename){
            return assetFilename.endsWith('.js');
        }
    }
}
