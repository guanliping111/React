# 2020-5-28
# react.js小书
## 第一 阶段
### 使用JSX描述UI的信息
   - 只要你要写 React.js 组件，那么就必须要引入React, Component（组件父类） 组件
   ```js
   import React, { Component } from 'react'
   import ReactDOM from 'react-dom' //ReactDOM 可以帮助我们把 React 组件渲染到页面
   ```
   - JSX 原理
    1. DOM 元素包含的信息只有三个：标签名，属性，子元素

    2. 编译的过程会把类似 HTML 的 JSX 结构转换成 JavaScript 的对象结构。
    JSX 结构
    ```js
      class Header extends Component {
      render () {
         return (
            <div>
            <h1 className='title'>React 小书</h1>
            </div>
         )
      }
      }
      ReactDOM.render(
      <Header />,
      document.getElementById('root')
      )
    ```

     编译后 => JavaScript 的对象结构
    ```js
      class Header extends Component {
      render () {
         return (
         React.createElement(
            "div",
            null,
            React.createElement(
               "h1",
               { className: 'title' },
               "React 小书"
            )
            )
         )
      }
      }
      ReactDOM.render(
      React.createElement(Header, null), 
      document.getElementById('root')
      );
    ```
   **所谓的 JSX 其实就是 JavaScript 对象**
   
     ReactDOM.render 功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上（在这里是 id 为 root 的 div 元素）。
     - 总结一下从 JSX 到页面到底经过了什么样的过程：
     1. JSX   => Babel编译 + React.js构造 
     2. Javascript   => ReactDOM.render 
     3. DOM元素 
     4. 插入页面

    - 总结
      JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
      React.js 可以用 JSX 来描述你的组件长什么样的。
      JSX 在编译的时候会变成相应的 JavaScript 对象描述。
      react-dom 负责把这个用来描述 UI 信息的 JavaScript 对象变成 DOM 元素，并且渲染到页面上。
### 组件的render方法
 1. 一个组件类必须要实现一个 render 方法，且必须要返回一个 JSX 元素。
 但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容包裹起来。

 2. 表达式插入
  - 在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 {} 包裹。
  - {} 内可以放任何 JavaScript 的代码，包括变量、表达式计算、函数执行等等.
  - 表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上
   React.js 中定义了 className 来帮助我们给元素添加类名。

 3. 条件返回
  - 我们可以在 render 函数内部根据不同条件返回不同的 JSX。
    isGoodWord 变量为 true  => 页面上是显示 React 小书 is good
    把 isGoodWord 改成 false  => 页面上就会显示 React 小书 is not good
  - 如果你在表达式插入里面返回 null,那么 React.js 会什么都不显示，相当于忽略了该表达式插入。
    结合条件返回的话，我们就做到显示或者隐藏某些元素：

 4. JSX 元素变量
   JSX 元素可以像 JavaScript 对象那样自由地赋值给变量，或者作为函数参数传递、或者作为函数的返回值。

### 组件的组合、嵌套和组件树
   1. 自定义的组件都必须要用大写字母开头，普通的 HTML 标签都用小写字母开头。
   2. 假设页面是由 Header 、Main 、Footer 几个部分组成，由一个 Index 把它们组合起来。
   3. 组件可以和组件组合在一起，组件内部可以使用别的组件。就像普通的 HTML 标签一样使用就可以。这样的组合嵌套，最后构成一个所谓的组件树，就正如上面的例子那样，Index 用了 Header、Main、Footer，Header 又使用了 Title 

### 事件监听
 1. 在 React.js 里面监听事件是很容易的事情，你只需要给需要监听事件的元素加上属性类似于 onClick、onKeyDown 这样的属性
 2. 在 React.js 不需要手动调用浏览器原生的 addEventListener 进行事件监听。React.js 帮我们封装好了一系列的 on* 的属性，当你需要为某个元素监听某个事件的时候，只需要简单地给它加上 on* 就可以了。而且你不需要考虑不同浏览器兼容性的问题，React.js 都帮我们封装好这些细节了
 3. 这些 on* 的事件监听只能用在普通的 HTML 的标签上，而不能用在组件标签上。
 #### event 对象