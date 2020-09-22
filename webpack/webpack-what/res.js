const { sum } = require("lodash")

//webpack打包完的文件格式
(function(obj) {
    //执行 每个文件里面的内容
    let module = {};;
    function require(params) {
        console.log(params);
    }
    obj[params](module, require);
    console.log(module);
})({
    //立即执行的函数
    //执行入口文件
    './index.js': function(module, require) {
        //从math.js Y引入
        // const sum = (a, b) => (a + b);
        const sum = require('./math.js');
        console.log(sum(10,20))
    },
    './math.js':function (module = {},require) {
        module.exports= (a, b) => (a + b)
    }
})

// module.exports 的代码 是如果在浏览器上面运行的