const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');//合并
const baseConfig = require('./webpack.base.js'); 
const serverConfig = {
    target:'node',// 在node项目中使用 
    mode:'development',// 开发的时候打包
    entry: './src/server/index.js',//入口 从哪里开始
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'build'),
    },
    // 排除node内置的模块
    externals:[nodeExternals()]
}
// module.exports = serverConfig;
module.exports = merge(baseConfig,serverConfig); //合并配置文件