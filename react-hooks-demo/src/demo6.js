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
        setUserInfo({
            ...userInfo,
            //name改了 但是不会引起相应的更新 因为下面组件的name 并没有更新
            //这说明我们在写代码的时候 会引发无效的更改
            //如何使用memo来提升编译性能
            name: ' John '
        })
    },2000)
    return (
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
        </>
    )
}
//DisplayUsername 子组件作用 
//如果值没有发生改变 就不用分配空间重新编译
export const DisplayUsername = memo((props)=>{
    console.log('只在name发生改变时才更新');
    return <h3>{props.ame}</h3>
})