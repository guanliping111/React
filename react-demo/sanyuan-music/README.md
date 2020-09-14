## react hooks+redux+immutable.js仿网易云音乐
- router
  1. react-router
     react-router-dom
     react-router-config
  2. react-router 嵌套
     config routes 配置一下清晰了
  当路由比较复杂时。传统的router/route配置难以维护，
  企业级的router配置方案react-router-config，
  清晰，可维护的 /routes/index.js配置
  layout app里总有几套皮肤 匹配那个级别的所有路由的
  routes  react-router-config renderRoutes(route.routes)

  
  3. styled-components 专门解决切页面 不用过于组件化的方法

  4. 懒加载
   react 优化 路由懒加载 
   先存放不加载 lazy  
   需要时拿出来Suspense 可 快速打开页面 
   (放冰箱lazy,提前解冻Suspense) 


- 学习别人的代码
https://github.com/sanyuan0704/react-cloud-music
1. 加入 global-style.js 文件 全局主题 方便整体更改


## 接口业务配置
- search 业务
  接口文档
  - 热门搜索
    url: /search/hot
    参数：null

    返回值：result.hot
  - 搜索建议
     /suggest?keywords=
     参数 keyword
     返回值 albums
  - 搜索结果
   /suggest?keywords=