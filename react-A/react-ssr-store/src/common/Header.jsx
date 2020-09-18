import React, { Component } from 'react';
import axios from 'axios';

//请求数据
function reqAction() {
    return axios('http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA')
}
// 公共
class Header extends Component {
    //客户端才有 componentDidMount 客户端请求数据回来渲染
    constructor() {
        super()
        this.state = {
            songs:typeof window === 'object' ? window.songs : null
        }
    }
//生命周期发出请求 客户端渲染
  componentDidMount() {
    // reqAction().then(res => {
    //     console.log(res);
    //     this.setState({
    //         songs:res.data
    //     })
    // })
  }
  render() { 
    const { songs } = this.state;
    return (
      <div>
        Hello World
        {songs?.result?.songs.map((s, i) => {
            return (
                <li key={i}>{s.name}</li>
            )
        })}
      </div>
    );
  }
}
//使服务端渲染
Header.loadDate = reqAction
 
export default Header;
