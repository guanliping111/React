## 2020-9-1
## 从0开始 简单搭建SSR框架 服务器端渲染
https://tech.youzan.com/server-side-render/

服务端渲染模式：
    用户请求页面 -> 发送请求到服务器 
    -> 后端根据用户和请求信息获取底层服务
    -> 根据服务返回的数据进行组装，同时JSP或FreeMarker模版引擎根据组装的数据渲染为html字符串 
    -> 应用服务器讲html字符串返回给浏览器 
    -> 浏览器解析html字符串渲染UI及加载静态资源 
    -> js静态资源加载完毕界面可交互。


## SPA 客户端渲染
vue/react  -> webpack -> html/css/js

html -> <div id="root"></div>
等js把所有的内容渲染到 root里面去
用户不能第一时间看到有价值的内容(白屏时间长)

## SSR 服务端渲染 优化  美团 网易云
vue/react -> webpack -> 后端(node) 
用户第一次访问html -> <div id="root">你网页的内容</div>
用户能第一时间看到有价值的内容(解决白屏时间过长)

识别js代码

node平台 renderToString 组件渲染成字符串
    renderToString 方法渲染的时候带有 data-reactid 属性. 
    在浏览器访问页面的时候，main.js能识别到HTML的内容，
    不会执行React.createElement二次创建DOM。

安装文件配置babel：
    @babel/core 
    @babel/cli 
    @babel/preset-env 
    @babel/preset-react 
    babel-loader -D

### 同构组件

1. 服务端 bundle.js 的一个node项目
2. 客户端 index.js  就是一个静态资源
3. node 服务让 react 组件通过renderToString 渲染成 html字符串
4. node 返回的东西就是带有内容的字符串(缩短首屏 白屏的时间)
5. node 返回html 结构，也把客户端的index.js返回给浏览器，
    让react组件在客户端也会渲染一次，绑定事件

### 同构路由
1. 目的 需要根据当前的url 渲染页面
2. 客户端 BrowserRouter
3. 服务端 手动传 req.url 告诉 StaticRouter
4. 两端都知道 用户正在访问的url, 两端渲染页面都能保持一致。
5. 问题：鼠标点击Link vs 刷新浏览器地址栏 页面由谁构造出来的


react同构总结：https://segmentfault.com/a/1190000013609085
- 什么是同构
一段代码既可以在服务端运行又可以在客户端运行

### <StaticRouter> 静态路由
BrowserRouter
renderRoutes

## MPA


