## 2020-5-29
- 初始化 npm init -y
 react 开发流程  webpack ts react + react-router  redux
 安装
 1. webpack    开发流程工具
 2. webpack-cli  commend line（cmd） 开发工具的命令行工具
   yarn add  webpack webpack-cli --save-dev 

 3. webpack-dev-server 3000  启动应用
   yarn add  webpack-dev-server --save-dev

 4. typescript  tsconfig.根目录下的ts配置 
    yarn add  typescript --save-dev

 5. @babel/core  
    .babelrc  处理js
   yarn add  @babel/core @babel/preset-env --save-dev

 6.  bootstrap  是前端css 框架
  yarn add bootstrap

- scr 开发目录 写业务代码
 index.ts 入口文件
 index.html  模板 
   由 webpack.config.js 来负责 webpack-dev-server --open

### 从零开始定制一个React项目的流程
1. npm init -y
此命令用来初始化项目。
2. yarn add  webpack webpack-cli --save-dev
此命令用来安装webpack依赖。
3. webpack是开发流程工具。
4. webpack-cli是webpack的命令行工具(commend line)。
5. yarn add  webpack-dev-server --save-dev
此命令指定项目在某个端口运行。安装完后在package.json文件中找到script,并将其修改为"start": "webpack-dev-server --mode development --inline --hot --open"。
6. yarn add  typescript --save-dev
此命令可以将项目中的ts文件编译为js文件。安装完后需要在根目录下配置一下tsconfig.json文件，告诉项目typescript是如何编译项目的。
7. yarn add  @babel/core @babel/preset-env --save-dev
@babel/core是一种转码器。它是我们js编译的核心，我们可以使用js的新特性，但它可以让js代码兼容所有的浏览器。安装完后，在项目根目录下创建.babelrc文件，并进行配置。
8. yarn add bootstrap
安装一个有点过时的前端css框架bootstrap。
9. 在根目录下创建src文件，再在src下创建一个index.ts文件
10. 在根目录下创建webpackconfig.js文件并配置该文件
11. yarn add html-webpack-plugin mini-css-extract-plugin
此命令是安装webpackconfig.js文件下的两个插件。
12. yarn add awesome-typescript-loader
此命令同样是安装插件。
13. yarn add css-loader
 此命令是用来解决bootstrap和babel版本的问题的。将webpackconfig.js文件中的module.exports下的module中的options删除即可。

14. npm run start
  运行项目