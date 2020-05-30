import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends Component {
  constructor () {
    super()
    this.state = {
      date: new Date()
    }
  }
  componentWillMount () {
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state =  { isShowClock: true }
  }
  handleShowOrHide () {
    this.setState({
      isShowClock: !this.state.isShowClock //调用函数并取反
    })
  }
  render () {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null }
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
)