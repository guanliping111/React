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
  - useRef ref
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
