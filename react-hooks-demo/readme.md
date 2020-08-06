## 
1. tsx 工作流
  .tsx React组件 -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript.jsx 
  -> babel(polyfill+ env + plugin 装饰器模式) -> react DOM -> webpack-dev-server html-webpack-plugin 
  footer script bundle.js
2. react-scripts
3. hooks特色
  - useState 
    ...object
  - useEffect  依赖里面有没有数据发生变化，没变化就不会发生调用
  - useMemo  缓存值
  - useCallback  缓存函数
  - useContext 获取数据 组件之间共享状态
  - useRef ref DOM
  - useReducer redux

4. 分析react项目是如何运行的
    jsx 
    root 根
    JSX编译的过程
    正则
    - 节点的类型
    有哪些？ 
    标签节点 div h4
    组件 递归
    <></>
    文本 退出
    
5. 你做项目的时候会碰到什么问题？
  - 文档 api
  - 互相尊重
  - useRef 解决闭包的副作用问题
  - 接口数据还没有加载完成，用户提前退出，报错
