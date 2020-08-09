// memo 笑脸
// useMemo 的函数是在渲染期间运行的。不
import React, { memo } from 'react';

//业务函数

const setSatisfactionClass = (level) => {
    //0-99只需要发生一次改变
    if (level < 100) {
        return "very-dissatisfied"
    }
    if (level < 200) {
        return "somewhat-dissatisfied"
    }
    if (level < 300) {
        return "neither"
    }
    if (level < 400) {
        return "somewhat-satisfied"
    }
    return "very-satisfied"
}
//防止多次渲染
//memo会帮我们缓存上一个值，当我们接收一个新的值之后
// 两个值进行比较 相同 拒绝修改使用已经缓存的东西 不同 则改
//达到即缓存又更新的能力，
//这是一个很抽象的函数，也会让我们对memo有更深的理解
const isSameRange = (prevValue, nextValue) => {
    // console.log(prevValue, nextValue);
    //setSatisfactionClass class要他生成的一个类名
    // 5个类名表示不同的位置 类名不变 位置就不变
    const prevValueClass = setSatisfactionClass(
        prevValue.level
    )
    const nextValueClass = setSatisfactionClass(
        nextValue.level
    )
    return prevValueClass === nextValueClass
}

export const FaceComponent = memo((props) => {
    //解构level
    //props会频繁的发生改变，使用memo 传入第二个参数
    const { level } = props; 
    return (
        //盒子
        <div className={setSatisfactionClass(level)}></div>
    )
}, isSameRange)//第二个参数 依赖项 上次赋值以来没有改变过，useMemo 会跳过二次调用，只是简单复用它上一次返回的值
//通过第二个参数指定一个自定义的比较函数来比较新旧 props。如果函数返回 true，就会跳过更新
//useMemo Hook 允许你通过「记住」上一次计算结果的方式在多次渲染的之间缓存计算结果





