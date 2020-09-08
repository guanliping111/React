## react-redux源码
cnpm i redux -S

- connect 高级组件 结收一个函数作为参数
connect 怎么传值

- 实现一个累加器方法
1. return () => { //卸载
        clearInterval(time);
     }
     清除定时器 形成新的定时器之前把上一个的定时器清除掉 保证只有一个定时器
2. setCount( c => c + 1);  c每次都拿到上一个更新完的c 得到累加的效果
3. useRef ref.current 存着新的current，每一次值的更新 都会拿到最新的一个值
