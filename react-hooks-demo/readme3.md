## useState object
- useState
    useState 就是一个 Hook，通过在函数组件里调用它来给组件添加一些内部 state
    React 会在重复渲染时保留这个 state
    useState 会返回一对值：当前状态和一个让你更新它的函数
- 在import解构出 useState 
- export 导出 
    MyComponent 大写的原因 它是一个组件 是一个类
    1. 声明一个新的叫做 “userInfo” 的 state 变量  
    useState 初始值不是一个简单的单词 初始值可以是
    这里的初始值是一个对象

## memo
https://zh-hans.reactjs.org/docs/react-api.html#reactmemo
https://juejin.im/post/6844903954539626510
https://juejin.im/post/6844904119358980110
https://juejin.im/post/6844904063612502029

### React.memo 记忆组件
- React.memo 为高阶组件 只适用于函数组件
    如果你的函数组件在给定相同 props 的情况下渲染相同的结果，那么你可以通过将其包装在 React.memo 中调用，以此通过记忆组件渲染结果的方式来提高组件的性能表现。这意味着在这种情况下，React 将跳过渲染组件的操作并直接复用最近一次渲染的结果。
- React.memo 仅检查 props 变更
    如果函数组件被 React.memo 包裹，且其实现中拥有 useState 或 useContext 的 Hook，当 context 发生变化时，它仍会重新渲染。

    默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现