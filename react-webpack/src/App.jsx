import React from 'react';
// import './style.css';
import styles from './style.css'; // 同步的import

export default function App() {
  const handleLoad = () => { //异步的import
    import('./dynamic.js').then(r => {
      console.log(r);
    })
  }
  return (
    <div 
    onClick={handleLoad}
    // className="swiper-container"
    className={styles['swiper-container']}
    >
      {/* http:baidu.com/a/b/index.html */}
      {/* ./ http:baidu.com/a/b/ip6x2.png */}
      {/* /  http:baidu.com/ip6x2.png */}
      <img src="/ip6x2.png"
       alt="图片加载出错"/>
      this is app 
    </div>
  )
}
