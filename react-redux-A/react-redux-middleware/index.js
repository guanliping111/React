const { func } = require("prop-types");

//写一个redux的中间件 mid1 对action进行处理 dispatch
function mid1(next) {
  return function(action) {
     // next 形参 代表下一个
     console.log('mid1 start');
     if(typeof action === 'function') {
         return action();
     }
     let res = next(action); //next指向最原始的 dispatch
     console.log('mid1 end');
     return res;
  }
}
function mid2(next) {
  return function(action) {
    console.log('mid2 start'); //最先执行mid2
    next(); //交给下一个处理 指向 上一个的也就是mid1的返回值
    console.log('mid2 end')
  }
}
// const mid2 = (next) => (action) => {
//     console.log('mid2 start'); //最先执行mid2
//     next(); //交给下一个处理 指向 上一个的也就是mid1的返回值
//     console.log('mid2 end')
// }

//redux 已经加载完了 两个中间件
//mid2(mid1(最原始的 dispatch))
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
//chain 拿到的是mid2的结果
const chain = myFlow(middlewares)
let nbDispatch = chain(() => {//mid1的默认值 第一个中间件的next
  console.log(`就是redux源码内部最原始、只能处理action、是纯对象的 dispatch函数`)
})
//mid 返回的是个函数
//fn3(fn2(fn1()))  中 间件得到的上一个结果 也是个函数
nbDispatch({a:1}) //给到mid2

//洋葱模型：从外到内-> 又从内到外冒泡

//输出的结果：
// mid2 start
// mid1 start
// 就是redux源码内部最原始 只能处理action 是纯对象的dispatch函数
// mid1 end
// mid2 end

//之所以结果是先显示mid2 的结果
//1. 因为 mid1把一整个action函数  给了mid2  mid2才会输出结果
//2. nbDispatch是拿到middlewares的结果 也就是开始执行mid2 拿到结果
//3. mid1中的next指向最原始的 dispatch，开始执行mid1的默认值指向chain里面的内容
//4. 接着mid1 end  -> mid2 end