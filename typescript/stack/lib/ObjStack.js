"use strict";
exports.__esModule = true;
var ObjStack = /** @class */ (function () {
    //构造器
    function ObjStack() {
        this.items = {};
        this.count = 0;
    }
    //入栈
    ObjStack.prototype.push = function (item) {
        //hashMap o(1) 时间复杂度 空间不连续
        this.items[this.count] = item;
    };
    //出栈
    ObjStack.prototype.pop = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count]; //删除栈顶元素
        return result;
    };
    //是否为空
    ObjStack.prototype.isEmpty = function () {
        return this.count === 0;
    };
    //返回栈顶元素
    ObjStack.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    };
    //清空
    ObjStack.prototype.clear = function () {
        this.items = {};
        this.count = 0;
    };
    //数量
    ObjStack.prototype.size = function () {
        return this.count;
    };
    //输出
    ObjStack.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "" + this.items[0];
        for (var i = 1; i < this.count; i++) {
            objString = objString + ", " + this.items[i]; //拼接
        }
    };
    return ObjStack;
}());
exports["default"] = ObjStack;
