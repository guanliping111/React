"use strict";
exports.__esModule = true;
var Stack_1 = require("./lib/Stack");
var stack = new Stack_1["default"]();
stack.push("第一条数据");
stack.push('第二条数据');
stack.pop();
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
console.log(stack.toString());
stack.clear();