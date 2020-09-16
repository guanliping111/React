## babel-插件
babel-plugin-react-router

## Link引入的css和import引入的css有啥区别
link html 标签
@import css语法

1、link引入的CSs可以同时加载，@import引入的css是在页面加载完毕后再加载
2、link是html标签，没有兼容性问题，而@import是css2之后引入的，
存在一定的兼容性问题，但是目前来看，由于基本都是CSS2-Css3了，因此使用上没有啥兼容性问题了
3、JS可以通过DOM操作link标签，但是无法操作@import
4、当然一般建议优先使用link，减少使用@import
