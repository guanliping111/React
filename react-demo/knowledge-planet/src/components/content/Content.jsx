import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <div className="content-box">
          <div className="content-img">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594875173920&di=5116a1c1ff58b433a8e08ce6b6751944&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg" alt="" />
          </div>
          <div className="content-title">视界</div>
          <p></p>
          <div className="content-author">
            顾中正
          </div>
        </div>
      </div>
    );
  }
};

export default Content;