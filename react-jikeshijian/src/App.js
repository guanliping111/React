import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TabPaner from './component/TabPaner'
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import axios from 'axios';

const { TabPane } = Tabs;

class App extends Component {
  state = {
    type: 1,
    finish:1,
    list: [],
    allLessons: [],
    lessons: []
  }
  async _loadData() {
    axios.get('/data/')
      .then(res => {
        console.log(res.data, '-----------------')
        this.setState({
          list:res.data.list
        })
      })
  }
  handleTabChange (key){
    console.log(key,'++++++++')
    // filterLesson();
  }
  handleTypeChange(key) {
    console.log(key,'_________')
    // filterLesson();
  }
  
  // handleFinishChange(key) {
  //   filterLesson();
  //   console.log(key)
  // }

  filterLesson() {
    // this.setState()
  }

  componentDidMount() {
    //数据请求
    this._loadData();
  }
  render() { 
    return (
      <div>
        <h1>我的课程</h1>
        <Tabs defaultActiveKey="1" onChange={this.handleTabChange.bind(this)}>
          <TabPane tab="全部" key="1">
          </TabPane>
          <TabPane tab="已学完" key="2">
          </TabPane>
          <TabPane tab="未学完" key="3">
          </TabPane>
        </Tabs>

        <Tabs onChange={this.handleTypeChange.bind(this)} type="card">
            <TabPane tab="所有形式" key="1">
            </TabPane>
            <TabPane tab="专栏" key="2">
            </TabPane>
            <TabPane tab="视频课" key="3">
            </TabPane>
            <TabPane tab="微课" key="4">
            </TabPane>
            <TabPane tab="每日一课" key="5">
            </TabPane>
            <TabPane tab="其 他" key="6">
            </TabPane>
        </Tabs>

        <TabPaner data={this.state.list}/>
      </div>
    );
  }
}
 


export default App;