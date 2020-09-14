## 2020-8-27
https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers

JSX -> createElement -> 虚拟DOM(react element) -> 
对应平台的渲染器 reactDOM/react-native 渲染

setState -> 生成另一颗虚拟DOM -> DOM diff(reconcilers) -> 
找出哪些地方需要更新 -> 应用更新

- reconcilers：不同的渲染器彼此共享一些代码
    当处理类似于 setState() 这样的更新时，
    reconciler 会调用树中组件上的 render()，
    然后决定是否进行挂载，更新或是卸载操作。

## Fiber reconciler (光纤协调器) -> 调和方式
之前的DOM diff 是递归的过程：
    我们遍历所有的节点，这个如果js执行事件是很长的，
    而且js计算和页面渲染，绘制，是互斥的。

    浏览器的一次event-loop/ frame:

    - task
    - microtask
    - resquestAnimationFrame
    - render
    - requestIdleCallback 当这一帧有空闲时间的时候

    之前js 是老大，我想执行多久我就执行多久
    现在 js 主动让位，我自己放在requestIdleCallback里面， 
    js 和浏览器 统一站在用户体验的角度，合作调度

fiber是比线程更为细微的流程控制机制。
**1. 协程、纤程** 
- 能够把可中断的任务切片处理。
- 能够调整优先级，重置并复用任务。
- 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
- 能够在 render() 中返回多个元素。
- 更好地支持错误边界。

**2. fiber: 是一种数据结构**  解决渲染没有优先级的问题=> 实现 异步渲染
这个结构支持我们写出 可中止暂停重新启动的代码
```js
    fiber: {
        child: 第一个子节点
        sibling: 下一个兄弟
        return: 父节点 
    }
```
**3. fiber: 以单链表的形式表达一棵树**

generate: yield

## 生命周期
Render 阶段： 算出哪些需要更新
Commit 阶段： 之前Render 阶段，已经花费了很多时间，
    为了让用户尽快看到页面，所有这个会一气呵成，安排更新页面