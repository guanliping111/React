## 2020-6-3
## redux 业务化
向我们的任何组件提供状态

Redux有3大核心概念：
1. Store
   Store则是我们储存state的地方。
   我们通过redux当中的createStore方法来创建一个store
2. Action
   Action表示应用中的各类动作或操作，
   不同的操作会改变应用相应的state状态，
   说白了就是一个带type属性的对象。

3. Reducer
   纯函数: 一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用
   它和 Array.prototype.reduce 当中传入的回调函数非常相似
   reducer接受state和action并返回新的stat
