## ts
- react 父子组件 prop-types
  ts 语法解决这个问题

  { title: string, content: string }
  ts: 类型约束

  {key: val, key2: val2}
  面向对象,面向接口(interface)的编程是设计模式基础

  typescript interface 关键字
  
  运行一个ts + react 项目需要哪些前端技术
  1. webpack 
   .tsx
   
  2. tsconfig.json jsx -> react ts -> js
  3. babel @babel 表示新版本
  安装如下配置
      - npm init -y  初始化一个NPM项目
      - yarn add webpack webpack-cli webpack-dev-server  
      - yarn add @babel.cli @babel/core  @babel/polyfill @babel/preset-env
      - yarn add babel-loader
      - yarn add awesome-typescript-loader
      - yarn add react react-dom @types/react  types/react-dom
      - yarn add html-webpack-plugin
      - yarn add typescript

或者 复制黏贴package.json 然后yarn 



## TypeScript 语言特性
- typeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法，因此现有的 JavaScript 代码可与 TypeScript 一起工作无需任何修改，TypeScript 通过类型注解提供编译时的静态类型检查。

- TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译。

- 增加的功能包括: 
类型批注和编译时类型检查
类型推断
类型擦除
接口
枚举
Mixin
泛型编程
名字空间
元组
Await
类
模块
lambda 函数的箭头语法
可选参数以及默认参数

- 将 TypeScript 转换为 JavaScript 代码: tsc test.ts
  app.ts  -> tsc app.ts  ->  app.js
  app.tsx  -> tsc app.tsx  ->  app.jsx
      