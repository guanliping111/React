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
