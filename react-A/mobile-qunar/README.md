## react 项目开发流程
1. css reset
   yarn add normalize.css
   index.css css移动业务的设置
   normalize.css有下几个目的：
    保护有用的浏览器默认样式而不是完全去掉它们
    一般化的样式：为大部分HTML元素提供
    修复浏览器自身的bug并保证各浏览器的一致性
    优化CSS可用性：用一些小技巧
    解释代码：用注释和详细的文档来

   - padding-top: 44px; 
     body里面设置 iphone规则 给header让位
2. prop-types
  yarn add prop-types

3. 无状态组件的创建流程刻意练习
   - 组件插入父级组件中，思考好props
   - 组件的类型如果是无状态组件
     prop-types css propTypes
     形参props
     return(<div></div>)
   - props结构出来的props
   - 功能函数建议由父组件来打理，纯粹的负责 render
     函数可以复用

4. 年轻的react-hooks 全新开发方式
  class Component -> function
  函数式编程
  class + construction + 生命周期 + render => function + react hooks魔法函数
  - useCallback 缓存一个函数 记忆函数
  - useMemo 
 
      1. useState 返回当前状态的属性和设置状态的方法
      2. useEffect  依赖里面有没有数据发生变化，没变化就不会发生调用
      3. useMemo  缓存值 有值 也可缓存函数 要return
      4. useCallback  缓存函数 不用return
      5. useContext 获取数据 组件之间共享状态
      6. useRef ref
      7. useReducer redux


5. 状态组件编写顺序

6. redux 
   - 简单的redux 项目结构
     store.js  createStore reducers 
        中间件 axios redux-thunk 支持异步
     reducer.js  combineReducers
     actions.js  数据请求  状态改变的触发都由actions来负责
        ActionType 可读性

   - redux API  -> 设计状态(reducer + action)
      初始值 from to  有两个reducer函数
      函数 初始值 action return 初始值
      状态会怎么改变 动作的声明 SET_FROM 
      - switch case
      - {type,payload} action
      - actionType 常量声明 可读性
      - actions 写出来

   - 数据组件化
     1. connect 高阶返回原组件
        connect({
          mapState,
          mapDispatch
        })(Comonent)

      2. 创建组件
      3. 状态组件，无状态组件重用方法

   - reducer
    1. action标准做法
    - 返回 { type, payload } 更新reducer 状态
    - 组件里的事件、生命周期等功能 主要是和数据 状态打交道，归为action来做
    - 所有的action =>  export function  在组件里引入需要的actions
    - bindActionCreators 
      actions 变成本地调用的函数 dispatch
    - useMemo 缓存函数 return 一个函数
    - connect 中去第二个参数返回 action



  1. action
    from 北京
    to 上海
    两个action 思想的切换
    盯修改的本质 redux

- from to 复盘  
  1. redux 编程思想
    - reducers纯函数 fan'huifan 状态及 接受状态的更新
    那一刻只有一个状态与之相对应 switch case
    - actions actionTypes
    是更新reducer的使者 需要 => dispatch一个action
    from to 都有独立的reducer和action
    - exchangeFromTo()
      dispatch getState
