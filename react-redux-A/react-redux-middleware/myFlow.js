const _ = require('loadsh');
const fn1 = (str) => {
    return str + 'def';
}
const fn2 = (str) => {
    return str.toUpperCase();
}
const fn = _.flow([fn1, fn2]);
console.log(fn('abc'));