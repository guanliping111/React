## 读redux源码

reduxjs/redux 源码库：https://github.com/reduxjs/redux

- 创建createStore

## 分析redux 源码 
redux 是单向数据流 ，使用函数式编程的概念 （纯函数， action必须是个对象）
流程 统一 规范 用它规定的流程把这个状态改变 
不用redux的话 直接state+1 

源码 
定义一些用于判断不同action的常量。
- actionCreator  ：用常量来定义一些action，这里一般可以用于数据请求。
    1. createStore接收一个reducer, reducer用于修改state，
        它会返回默认的state，或者action修改了之后的state。
    2. createStore会暴露两个方法 ，dispatch和getState, 
        diapatch方法接收一个action，将state和action交给reducer方法执行，实现数据的修改。
        getState方法获取到最新修改的state。
    3. 注意：为获取state默认值，会先diapatch一次