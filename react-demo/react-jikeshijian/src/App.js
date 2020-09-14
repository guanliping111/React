import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './mock/data'
import { Tabs, Table, Button } from 'antd';
import axios from 'axios';
import { render } from 'react-dom';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    type: 0,
    finish: 0,
    allLessons: [],
    lessons: [],
    lessons1: []
  }
  async _loadData() {
    axios.get('/data/')
      .then(res => {
        // console.log(res.data, '-----------------')
        this.setState({
          allLessons: res.data.list,
          lessons: res.data.list,
          lessons1: res.data.list
        })
      })
  }
  handleTabChange(key) {
    // console.log(key,'++++++++')
    this.filterLesson(key);
  }
  filterLesson(finish) {
    // console.log(typeof finish, finish)
    if (finish === '0') {//全部课程
      // console.log('dsada')
      this.setState({
        lessons: this.state.allLessons,
        lessons1: this.state.allLessons
      })
    }
    if (finish === '1' || finish === '2') { //已学完 or 未学完
      // console.log('aaaa')
      console.log(this.state.allLessons)
      this.setState({
        lessons: this.state.allLessons.filter(e => (e.finish.toString() === finish)),
        lessons1: this.state.allLessons.filter(e => (e.finish.toString() === finish))
      })
    }
  }
  handleTypeChange(key) {
    // console.log(key, '_________')
    this.filterLesson1(key);
  }
  filterLesson1(type) {
    if (type === '0') {
      this.setState({
        lessons1: this.state.allLessons
      })
    }
    else {
      this.setState({
        lessons1: this.state.lessons.filter(e => (e.type.toString() === type))
      })
    }
  }
  
  componentDidMount() {
    //数据请求
    this._loadData();
  }
  render() {
    const columns = [
      {
      render:(a,b) => (
      <img src={b.image}></img>
      )
    },
      {
        render: (a, b) => (
          <div>
            <div>{b.title}</div>
            <div>
              <span type="">共{b.lesson}讲</span>|
              <span>已学{b.learned}讲</span>|
              <span>学完{b.finish = ((b.learned / b.lesson * 100)).toFixed(2)+"%"}</span>
            </div>
          </div>
        )
      },
      { 
      render: (a,b) => {
        let type = ""
        switch(b.type) {
          case 1:
            type = "专栏"
            break;
          case 2:
            type = "视频课"
            break;
          case 3:
            type = "微课"
            break;
          case 4:
            type = "每日一课"
            break;
          case 5:
            type = "其他"
            break;
        }
        return (
          <div>{type}</div>
        )
      }
     },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => 
        <Button type="primary" danger>
          开始学习
        </Button>
        // <a>开始学习</a>,
      },
    ];
    return (
      <div>
        <h1>我的课程</h1>
        <Tabs defaultActiveKey="0" onChange={this.handleTabChange.bind(this)}>
          <TabPane tab="全部" key='0'>
          </TabPane>
          <TabPane tab="未学完" key="1">
          </TabPane>
          <TabPane tab="已学完" key="2">
          </TabPane>
        </Tabs>

        <Tabs onChange={this.handleTypeChange.bind(this)} type="card">
          <TabPane tab="所有形式" key="0">
          </TabPane>
          <TabPane tab="专栏" key="1">
          </TabPane>
          <TabPane tab="视频课" key="2">
          </TabPane>
          <TabPane tab="微课" key="3">
          </TabPane>
          <TabPane tab="每日一课" key="4">
          </TabPane>
          <TabPane tab="其 他" key="5">
          </TabPane>
        </Tabs>

        <Table
          columns={columns}
          showHeader={false}
          dataSource={this.state.lessons1} />
      </div>
    );
  }
}



export default App;