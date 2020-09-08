import React, { useState, useEffect, useMemo, useRef } from 'react';
// 逻辑
let obj = {
  0: '星期日', 5: '星期五'
}
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => { //启动一个定时器
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => { //卸载
      clearInterval(timer);
    }
  }, []) //[] 保证只有一个 setInterval 

  let dateStr = useMemo(() => { //计算逻辑放在useMemo里面
    let day = date.getDay();
    return `${obj[day]}${date.toLocaleTimeString()}`
  }, [date])
  return dateStr;
}
// ui 自定义的hook useClock
function Clock() {
 //每隔1s 加1
  const [count, setCount] = useState(0);
  const ref = useRef();
  ref.current = count;
  const date = useClock();
  console.log(count);
  useEffect(() => { 
    let time = setInterval(() => {
        // setCount(count + 1)
        // setCount( c => c + 1);//c每次都拿到上一个更新完的c 得到累加的效果
        setCount(ref.current + 1);
    }, 1000)
    // return () => { //卸载
    //     clearInterval(time);
    // }
  }, [count]) //[] 保证只有一个 setInterval 
  return (
    <div>
     { count } <br />
      { date }
    </div>
  )
}
export default Clock;
// export default useClock;