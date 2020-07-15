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
  - useCallback 缓存一个函数
  - useMemo 

5. 状态组件编写顺序

6. redux 
   - 简单的redux 项目结构
     store.js  createStore reducers 
        中间件 axios redux-thunk 支持异步
     reducer.js  combineReducers
     actions.js  数据请求  状态改变的触发都由actions来负责
        ActionType 可读性

   - redux API  -> 设计状态(reducer + action)
      初始值 from to  有两个reducerF函数
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