import React,{Component} from 'react';
import './Search.css';
// import { Link } from 'react-router-dom';

class Search extends Component {
 
  render() {
    return (
      <div className="search">
        <div className="search-input">
          <input text="text" placeholder="搜索用户、星球或内容"></input>
        </div>
        <div className="search-img">
          <p className="iconfont icon-sousuo"></p>
        </div>
      </div> 
    );
  }
};

export default Search;