## webpack
  https://juejin.im/post/6855129007785328653#heading-12
  
  https://mp.weixin.qq.com/s?__biz=MzIxMzExMjYwOQ==&mid=2651892967&idx=1&sn=57f71d4e92adfa4497f3d5e21e914690&chksm=8c5fcea9bb2847bf53b0b63e2a80574cd0508929cf96e517576dbdd6ec2be10d2287e1c7c65b&mpshare=1&scene=23&srcid=0804jg05UssIG5QdHSRgnKT6&sharer_sharetime=1596536089715&sharer_shareid=f6add546d865569509a0448d0a1e7b82#rd
### 什么是webpack
  webpack是一个模块绑定器
  webpack 的最终目标是将所有这些不同的源和模块类型统一起来，从而将所有内容导入JavaScript代码，并最生成可以运行的代码。
  1. entry 入口点
  2. Output 生成JavaScript和静态文件
  3. Loaders 在模块中转换文件第三方扩展程序，可帮助webpack处理各种文 件扩展名。 例如，CSS，图像或txt文件。
  4. Plugins 插件是第三方扩展，可以更改webpack的工作方式 
     加载 HTML 模板。
  5. Mode webpack 有两种操作模式：开发(development)和生产(production)。 它们之间的主要区别是生产模式自动生成一些优化后的代码。
  6. Code splitting  代码拆分或延迟加载

### 运行webpack
  1. 运行 webpack  -> 在 package.json 配置
  ```js
   "scripts": {
    "dev": "webpack --mode development"
   },
  ```
  2. 在开发模式下运行 webpack: npm run dev

### 配置webpack
  对于简单的任务，webpack无需配置即可工作，但是很快就会遇到问题，一些文件如果没有指定的 loader 是没法打包的。需要对 webpack进行配置，在 webpack.config.js 进行的
  1. 导出方式
  2. 更改入口路径
  3. 更改包的输出路径

### 打包 HTML
   要在webpack中使用 HTML，我们需要安装一个插件html-webpack-plugin
   然后在 plugins中配置
   html-webpack-plugin的最终目标有两个：
   1. 加载 html 文件
   2. 它将bundle注入到同一个文件中

### webpack development server
  - 让开发更方便，不需要改动了文件就去手动刷新文件，启动本地服务器来提供文件。
  - 安装 和在package.json中配置 添加一个 “start” 命令

### 使用 webpack loader
  - Loader是第三方扩展程序，可帮助webpack处理各种文件扩展名
   
### babel
  babel是一个JavaScript编译器。 
  babel 可以将现代JS(es6, es7...)转换为可以在（几乎）任何浏览器中运行的兼容代码。
  要使用它，我们需要安装一些 Loader:
  1. babel-core： 把 js 代码分析成 ast ，方便各个插件分析语法进行相应的处理
  2. babel-preset-env：将现代 JS 编译为ES5
  3. **babel-loader **： 用于 webpack