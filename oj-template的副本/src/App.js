import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//数据跟组件是分离的
import axios from 'axios';
import './mock/data.js';
import { Table, Tag, Space } from 'antd';

// JSX UI state MVVM 

//函数的返回值是组件
//  /posts/ axios api url   /comments/
//Post  组件作为参数 
//通用性的提供数据请求及更新的解决方案
//有人为他服务
class Post extends Component {
  render() {
    const data = this.props.list;
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'Age',
        key: 'Age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'email',
        dataIndex: 'email',
        key: 'email',
      }, 
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      }, 
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <a>Delete</a>
          </Space>
        ),
      },
    ];
    return (
      <Table columns={columns} dataSource={data} />
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}


const loadAndRefresh = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor() {
      super()
      this.state = 
      { 
        msg: '',
        content: '',
        list: ''
      }
    }
    componentDidMount() {
      // 数据请求 
      this._loadData();
    } 
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      });
      axios.get(url)
      .then(res => {
        // console.log(res.data);
        this.setState({
          msg: res.data.title,
          content: res.data.content,
          list:res.data.list
        })
      })
    }

    render() {
      const props = {
        msg: this.state.title,
        content: this.state.content,
        list:this.state.list
      }
      return (
        <WrappedComponent {...props} />
      )
    }
  }
}
//复用
const WrappedPost = loadAndRefresh('/posts/')(Post);
const WrappedComment = loadAndRefresh('/comments/')(Comment);

function App() {
  return (
    <div className="App">
      {/* message  */}
      {/* <Post/> */}
      <WrappedPost />
      <WrappedComment />
    </div>
  );
}


export default App;
