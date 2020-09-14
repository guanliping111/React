// memo 性能优化
//传给 useMemo 的函数是在渲染期间运行的。不要在其中做任何你通常不会在渲染期间做的事。
//举个例子，副作用属于 useEffect，而不是 useMemo。
import React, { memo, useState } from 'react';
export const MyComponent = () => {
    const [userInfo, setUserInfo] = useState({
        //当useState 
        name: ' John ',
        lastName: 'Doe'
    })

    setTimeout(()=> {
        console.log('---------')
        //7.写一个 setTimeout 2s之后 调用setUserInfo 当name的不变的时候 DisplayUsername子组件不更新，
        setUserInfo({
            //当useState 是一个对象 返回一份新的拷贝 完全重置它 
            //把它上一个阶段展开 你要修改哪个 就设置哪个
            //... 展开 覆盖 返回新的state的状态值
            ...userInfo,
            //name改了 但是不会引起相应的更新 因为下面组件的name 并没有更新
            //这说明我们在写代码的时候 会引发无效的更改
            //如何使用memo来提升编译性能
            name: ' John '
        })
    },2000)
    return (
          //fragment标签 它的作用是性能优化， 所有的子组件都挂载到它上面，它再一次性挂载
        <>
    {/* 通过props传值 是最简单的传值方式 */}
            <DisplayUsername name={userInfo.name}/>
            <input
                type="text"
                value={userInfo.name}
                onChange={e => setUserInfo({
                    ...userInfo,
                    name:e.target.value
                })}
            />
             <input
                type="text"
                value={userInfo.lastName}
                onChange={e => setUserInfo({
                    ...userInfo,
                    lastName:e.target.value
                })}
            />
        </>
    )
}
//DisplayUsername 子组件作用 
//如果值没有发生改变 就不用分配空间重新编译
export const DisplayUsername = memo((props)=>{
    console.log('只在name发生改变时才更新');
    return <h3>{props.name}</h3>
})