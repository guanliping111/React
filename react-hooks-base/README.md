## hooks
  Hooks 是 React 16 中的特性，解决函数组件想使用类组件的一些特性。

- 生命周期的三个阶段
  1. 初始化渲染 render  componentDidMount
  2. 更新阶段 shouldComponentUpdate  render  ComponentUpdate 
  3. 卸载 componentWillUpdate

1. useState 
   返回当前状态的属性和设置状态的方法，每当状态改变之后，方法中会调用刷新视图的 render 方法。
   解决多个 useState 同时使用的问题，当多个状态存在的时候，我们需要使用数组保存状态。
2. useEffect
3. useMemo  缓存值
4. useCallback  缓存函数