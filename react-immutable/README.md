## 2020-6-11
## 函数式编程
- 不可变
- 纯函数 

## immutable 
学习笔记： https://www.cnblogs.com/chris-oil/p/8494337.html
文档：https://github.com/immutable-js/immutable-js#immutable-collections-for-javascript

deep clone 
深拷贝 浅拷贝： 各有优缺点
 - 结构共享
   运用 immutable 结构共享的特性 优化性能

 - 几个重要的API

 1. fromJS()
  fromJS() 是最最最常用的将原生 JS 数据转换为 ImmutableJS 数据的转换方法。
  使用方式类似于 JSON.parse() ，接收两个参数： json 数据和 reviver 函数
  在不传递 reviver 函数的情况下，默认将原生 JS 的 Array 转为 List ， Object 转为 Map

 2. toJS()
    toJS() 就是用来对两个 immutable 对象进行值比较的。使用方式类似于 Object.is(obj1, obj2) ，接收两个参数

 3. Map
 Map 数据类型，对应原生 Object 数组

- 什么是 Immutable Data
  1. Immutable Data 就是一旦创建，就不能再被更改的数据。
     对 Immutable 对象的任何修改或添加删除操作都会返回一个新的Immutable 对象
  2. Immutable 实现的原理是 Persistent Data Structure （持久化数据结构），
     也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变
  3. 同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗， 
     Immutable 使用了 Structural Sharing···· （结构共享），
     即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享。
