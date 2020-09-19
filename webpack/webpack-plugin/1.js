const { Synchook, AsyncSeriesHook } = require('tapable');
const hook = new Synchook();

hook.tap('hook1',() => {
    console.log(1);
})
hook.call();
//两个异步任务 串行 7s
asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },3000);
    })
})
asyncHook.tapPromise('xxx', () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },4000);
    })
})
asyncHook.tapAsync('xxxx', (cb) => {
    setTimeout(() => {
        cb();
    },3000);
})
asyncHook.promise().then(() => {
    console.log('异步完成')
});
asyncHook.callAsync(() => {
    console.log('介绍了');
})