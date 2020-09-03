const _ = require('lodash');

function fn1(str) {
    return str + 'def';
}
// class A
function fn2(str) {
    return str.toUpperCase();
}
//class B
//继承
// const fn = _.flow([fn1, fn2]); //flow 组合两个函数 函数式编程
const fn = myFlow([fn1, fn2]);
console.log(fn("abc")); //ABCDEF

//手写flow
function myFlow(...fns) {
    //组合所有的函数
    // fn3(fn2(fn1()))
    return function(defaultVal) {
        let res = defaultVal;
        while(fns.length) {
            let first = fns.shift();
            res = first(res);
        }
        return res;
    }

}