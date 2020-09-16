//babel 优化 编译成 a.js文件
//源码 
export default [
    {
        path: '/',
        component: './index',
        routes: [
            {
                path: '/a',
                component: './a',
            },
            {
                path: '/b',
                component: './b',
            }
        ]
    }
]