//写一个redux的中间件 mid1
const mid1 = (next) => (action) => {
    // next 形参 代表下一个
    if(typeof action === 'function') {
        return action();
    }
    return next(action);
}
const mid2 = (next) => (action) => {
    console.log('mid2 start');
    next(); //交给下一个处理
    console.log('mid2 end')
}

//redux 已经加载完了 两个中间件
const middlewares = [mid1, mid2];
//compose or flow 合并 组合两个函数
function myFlow(fns) {
    // 组合所有的 函数
    // fn3(fn2(fn1()))
    return function(defaultVal) {
      let res = defaultVal;
      while(fns.length) {
        let fisrt = fns.shift();
        res = fisrt(res);
      }
      return res;
    }
}

// 合并 mid1 mid2
const chain = myFlow(middlewares)
//mid 返回的是个函数
//fn3(fn2(fn1()))  中 间件得到的上一个结果 也是个函数
