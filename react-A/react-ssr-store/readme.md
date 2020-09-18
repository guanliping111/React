## 同构 数据
输入URL URL到服务器 ->  服务器渲染出来第一屏(落地页)
之后的切换路由渲染出来的页面  都是前端操作是js驱动 ->  客户端渲染
后续(js管)  切换页面(js)

- npm-run-all
可以给我们同时打包以下三个命令
dev:start 
dev:build:server
dev:build:client

- 怎么获得页面的数据 -> 请求后端 axios
服务端返回的只是html
 要加一个script js代码 -> 变成客户端渲染 componentDidMount实现的
 
怎么让全部服务端渲染？
Header.loadDate = reqAction
后端响应数据 后端挂到window -> 前端去取数据