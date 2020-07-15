import React,{Component} from 'react';
// import { Link } from 'react-router-dom';

class Search extends Component {
 
  render() {
    return (
      <div className="search">
        <p className="iconfont icon-sousuo"></p>
        <input text="text" placeholder="搜索用户、星球或内容">
          
        </input>
      </div> 
    );
  }
};

export default Search;