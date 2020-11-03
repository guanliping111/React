## 什么是webpack
打包文件 => 合并文件 
两个参数 function(module, require){}
结构：
(function() {
    //逻辑
})()

## webpack loader 功能
实现 css-loader 干什么的
webpack 本身不能解析css文件
之前是用第三方插件来解析
现在我要写一个loader 关于css的规则 rule 来解析css文件