// 模块化URL
import React from 'react';  // 引入react 
import './header.css';

function Header() {
  return (
    <header>
      <div class="top">
        <span class="iconfont menu">&#xe65c;</span>
        <span class="title">网易云音乐</span>
        <span class="iconfont search">&#xe62b;</span>
      </div>
    </header>
  )
}

export default Header;//向外输出模块