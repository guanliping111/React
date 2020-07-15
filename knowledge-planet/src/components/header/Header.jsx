import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
 
  render() {
    return (
      <div className="header">
        <p>知识星球
          <span className="iconfont icon-add-sy"></span>
        </p>
        
      </div>
    );
  }
};

export default Header;