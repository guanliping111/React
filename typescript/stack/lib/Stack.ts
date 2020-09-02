// 数据结构由什么组成？
// ADT 数据和操作数据方法
// 栈 FILO 先进后出
// 队列 FIFO 先进先出

// 原数据: items: any[]
// 方法: constructor this.items = []
// 入栈: push
// 出栈: pop
// 获取栈顶元素: peek 
// 数量: size
// 是否为空: isEmpty
// 清空: clear
// 输出: toString

export default class Stack {
    private items: any[];
    constructor() {
        this.items = []
    }
    push(items: any) {
        this.items.push(items);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    clear() {
        this.items = [];
    }
    size() {
        return this.items.length;
    }
    toString() {
        return this.items.toString();//返回其数组 是一个字符串
    }
}
