## react16知识
### fiber 
输入 ：用户的交互 优先级更高
页面的更新

fiber 以单链表的形式表达一棵树：以循环的方式遍历这棵树
作用：遍历fiber树的时候可以中断
把递归变成循环
- fiber主要目标
1. 能够把可中断的任务切片处理。
2. 能够调整优先级，重置并复用任务。
3. 能够在父元素与子元素之间交错处理，以支持 React 中的布局。
4. 能够在 render() 中返回多个元素。
5. 更好地支持错误边界。

### setState
forceUpdate

### Suspense

###  sentry 错误监控
收集日志错误
加在入口文件里面 index.js
```js
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: 'https://7141cad21dbb4293979b414f3c1df777@o450734.ingest.sentry.io/5435550',
  integrations: [
    new Integrations.BrowserTracing(),
  ],
  tracesSampleRate: 1.0,
});
```



## 参考文章
[fiber官网](https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers)