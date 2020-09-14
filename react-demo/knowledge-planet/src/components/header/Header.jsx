import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
 
  render() {
    return (
      <div className="header">
        <div className="header-text">知识星球</div>
        <div className="header-aside">
          <span className="iconfont icon-add-sy"></span>
        </div>
        
      </div>
    );
  }
};

export default Header;