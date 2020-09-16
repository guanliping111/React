//babel 插件 自动生成 编译 成这个文件
import A from './index';
import B from './a';
import C from './b';

export default [
  {
    path: '/',
    component: A,
    routes: [
      {
        path: '/a',
        component: B
      },
      {
        path: '/b',
        component: C
      }
    ]
  }
]
