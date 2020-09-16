## react-redux源码
cnpm i redux -S

- connect 高级组件 接收一个函数作为参数
connect 怎么传值
由于connect后，各connect组件是共享store的，所以各组件可以通过store来进行数据通信
connecct重点理解 以下两个
1. mapStateToProps
2. mapDispatchToProps


- 实现一个累加器方法
1. return () => { //卸载
        clearInterval(time);
     }
     清除定时器 形成新的定时器之前把上一个的定时器清除掉 保证只有一个定时器
2. setCount( c => c + 1);  c每次都拿到上一个更新完的c 得到累加的效果
3. useRef ref.current 存着新的current，每一次值的更新 都会拿到最新的一个值

- context的用法：
react是单向数据流，我们想传递数据需要一层层向下传递，数据传递变得非常麻烦,我们可以用context实现数据的交互
1. 父组件向子组件传递数据的方法
```js
	<-- 定义子组件上下文的类型 -->
	static childContextTypes = {
    	store:PropTypes.object，
    };
    <-- 定义子组件上下文的数据 -->
    getChildContext(){
    	return {
    		store:store，
    	}
    }
```
2. 子孙组件承接父组件数据的方法