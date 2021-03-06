import Stack from './lib/Stack';
import ObjectStack from './lib/ObjStack';

const decimalToBinary = function(decNumber) {
    const stack = new Stack();
    let number = decNumber;
    let rem; // 余数
    let binaryString = "";
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem);
        number = Math.floor(number/2);
    }
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString();//最后一个出栈
    }
    return binaryString;
}

const decimalToBinaryObjStack = function(decNumber:number) : string {
    const stack = new ObjectStack();
    let number = decNumber;
    let rem; //余数
    let binaryString = "";
    while(number > 0) {
        rem = Math.floor(number % 2);
        stack.push(rem); //入栈
        number = Math.floor(number / 2);
    }
    while(!stack.isEmpty()) { //栈不为空
        binaryString += stack.pop().toString();//最后一个出栈
    }
    return binaryString;
}
const testNumber = 889565456565756;
console.time("数组栈");
console.log(decimalToBinary(testNumber));
console.timeEnd("数组栈");

console.time("对象栈");
console.log(decimalToBinaryObjStack(testNumber));
console.timeEnd("对象栈");