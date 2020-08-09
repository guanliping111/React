## 
1. tsx 工作流
  .tsx React组件 -> webpack.config.js -> awesome-typescript-loader -> tsconfig.json -> typescript.jsx 
  -> babel(polyfill+ env + plugin 装饰器模式) -> react DOM -> webpack-dev-server html-webpack-plugin 
  footer script bundle.js
2. react-scripts
3. hooks特色
  - useState 需要超过两个层级传递 => 用useContext
    ...object
  - useEffect  依赖里面有没有数据发生变化，没变化就不会发生调用
  - useMemo  缓存值
  - useCallback  缓存函数
  - useContext 获取数据 组件之间共享状态 可跨层级传递
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


  1. return的内容只能有一个根节点，需要一个包裹元素。一般我都会孤陋寡闻地用div，fragment的好处是聚合成一个子元素列表，且在DOM中不增加额外节点。可以直接简写成<></>。

  Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
  https://reactjs.bootcss.com/docs/fragments.html

  2. 因为在JS中，每个代码换行编译时都会在末尾加上;，没有括号就会变成P2。所以括号的作用是告诉JS这是一个代码块不需要加分号。把代码写成以下两种格式，return的括号不是必须的，括号只起到增加代码可读性的作用。
  文本节点 退出条件
