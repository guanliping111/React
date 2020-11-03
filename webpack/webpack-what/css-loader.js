//css.css 样式文件
//import

const { module } = require("./webpack.config");

//export
module.export = function(source) {
    console.log(source);
    return `expotr default \`${source}\``
}