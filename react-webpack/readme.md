## webpack 常用优化手段
https://webpack.docschina.org/configuration/externals/#externals

### 分离基础库(react/react-dom)
1. externals 外部扩展
排除依赖 打包时 不打包react 体积减小
防止将某些 import 的包(package)打包到 bundle 中，
而是在运行时(runtime)再去从外部获取这些扩展依赖。

2.  Optimization 优化

插件
3.  mini-css-extract-plugin  提取css 到独立文件
    它为每个包含 CSS 的 JS 文件创建一个 CSS 文件。
    它支持 CSS 和 sourcemap 的按需加载。

4. imagemin-webpack-plugin 压缩项目中所有图片

5. happypack  可以提升打包速度 对于大项目打包 速度明显
通过并行转换文件，HappyPack 使初始 webpack 构建得更快。