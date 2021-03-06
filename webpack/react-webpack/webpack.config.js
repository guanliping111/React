const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
const HappyPack = require('happypack');
const webpack = require('webpack');

//1. 分离基础库(react/react-dom)
//业务代码：经常变动

//react/reactDom CDN地址 用户缓存时间加长
//main.js(业务代码) 缓存时间短
const config = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // externals:{ //排除依赖 打包时 不打包react react-dom 体积减小
  //   react: 'React',
  //   'react-dom':'ReactDom'
  // },

  // chunk
  //Dll 既可以分离基础库 又可以提升打包速度
  optimization: {
    //代码分割
    splitChunks: {
      chunks: 'all', //同步的： all 所有的import  异步async: import(xxx).then
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,//打包规则
        },
      }
    }
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  module: {
    rules: [
      {
        test: /(.js|.jsx)$/,
        // use: ['babel-loader'],
        use: 'happypack/loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 
        {
          loader: 'css-loader',
          options: {
            modules: {
              mode: 'local',
              localIdentName: '[hash:base64:5]'
            }
          }
        }
      ],
        //css-loader css 这个模块
        //style-loader css内容 插到html 的 style标签之内
        // css-module
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new BundleAnalyzerPlugin(),
    new CopyPlugin({
      patterns: [
        { from: './public/ip6x2.png', to: './' },
      ],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin(),
    new HappyPack({
      // 3) re-add the loaders you replaced above in #1:
      loaders: [ 'babel-loader' ]
      // 应该应用的 loader，它相对上下文解析
      // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
      // 查看 webpack 1 升级指南。
    }),
    //dll 动态链接库
    // 当我们需要使用动态链接库时 首先会找到manifest文件 得到name值记录的全局变量名称 然后找到动态链接库文件 进行加载
    new webpack.DllReferencePlugin({
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../dist/dll/vendor-manifest.json'),
    })
  ]
}
module.exports = config

// dist 存着 就是一个 最终打包的结果
// dist 最终上线的一个 文件夹