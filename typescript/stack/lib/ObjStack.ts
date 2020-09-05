// k:v 没有顺序的 stack 入栈是有顺序的
//进制转换
interface StackObj {
    // 模拟数组
    // 手动维护 指针
    [propsName: number]: any;
}

export default class ObjStack {
    private items: StackObj; //JSON 代替Array 性能更好
    private count: number;
    //构造器
    constructor() {
        this.items = {};
        this.count = 0;
    }
    //入栈
    push(item: any) {
        //hashMap o(1) 时间复杂度 空间不连续
        this.items[this.count] = item;
    }
    //出栈
    pop() {
        if(this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const  result = this.items[this.count];
        delete this.items[this.count];//删除栈顶元素
        return result;
    }
    //是否为空
    isEmpty() {
        return this.count === 0;
    }
    //返回栈顶元素
    peek() {
        if(this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    //清空
    clear() {
        this.items = {};
        this.count = 0;
    }
    //数量
    size( ) : number {
        return this.count;
    }
    //输出
    toString() {
        if(this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}` //拼接
        }
    }
}