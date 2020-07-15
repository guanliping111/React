import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-item">
          <div className="iconfont icon-iconset0456 fontsize"></div>
          <p>星球</p>
        </div>
        <div className="footer-item">
          <div className="iconfont icon-dongtai"></div>
          <p>动态</p>
        </div>
        <div className="footer-item">
          <div className="iconfont icon-faxian"></div>
          <p>发现</p>
        </div>
        <div className="footer-item">
          <div className="iconfont icon-wo"></div>
          <p>我</p>
        </div>
      </div>
    );
  }
};

export default Footer;