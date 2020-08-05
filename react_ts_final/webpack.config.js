var path = require('path');
var basePath = __dirname;
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Common JS 导出方式
module.exports = {
  context: path.join(basePath, "src"),
  resolve: { //检测每一个文件
    extensions: [".js", '.ts', '.tsx']
  },
  //入口文件地址
  // 让代码兼容性更好  更改入口路径
  entry: ["@babel/polyfill", "./app.tsx"],
  // 输出文件地址
  //第一个webpack包，output 包的输出路径
  output: {
    path: path.join(basePath, "dist"), //入口文件 根目录dist
    filename: "bundle.js"   //尾部文件
  },
  devtool: "source-map",
  devServer: {  //在编译之后 启动服务器 8080端口
    contentBase: "./dist",
    inline: true, // enable watch and live reload
    host: "localhost",
    port: 8080,
    stats: "errors-only"
  },
  // 用对应的 loader 代码进行编译
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" //兼容性处理降级
        }
      }
    ]
  },
   //打包 HTML 
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html", //在index.html加载 HTML 模板。
      hash: true
    })
  ]
}