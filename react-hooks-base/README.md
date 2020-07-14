## hooks
  Hooks 是 React 16 中的特性，解决函数组件想使用类组件的一些特性。

- 生命周期的三个阶段
  1. 初始化渲染 render  componentDidMount
  2. 更新阶段 shouldComponentUpdate  render  ComponentUpdate 
  3. 卸载 componentWillUpdate

1. useState 
   返回当前状态的属性和设置状态的方法，每当状态改变之后，方法中会调用刷新视图的 render 方法。
   解决多个 useState 同时使用的问题，当多个状态存在的时候，我们需要使用数组保存状态。
2. useEffect  依赖里面有没有数据发生变化，没变化就不会发生调用
3. useMemo  缓存值
4. useCallback  缓存函数
5. useContext 获取数据 组件之间共享状态
6. useRef ref
7. useReducer redux


301: 永久重定向   http -> https
302：临时重定向   需要登录权限，但是没有登录，重定向到登录页面

## position
 - relative
 - absolute

## cors

1. Access-Control-Allow-Origin
2. Access-Control-Allow-Methods
3. Access-Control-Max-Age 预检请求，缓存预检请求结果
4. Access-Control-Allow-Headers
5. Access-Control-Allow-Credentials 允不允许携带cookies

6. Content-Type
7. Access-Control-Expose-Headers