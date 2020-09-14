import React from 'react';
import ReactDOM from 'react-dom';

class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true,
    title: null
  }
  open = ({title}) => {
    this.setState({
      visiable: true,
      title
    })
  }
  close = () => {
    this.setState({
      visiable: false
    })
  }
  render() {
    const { visiable, title } = this.state;
    return (
       <div className={visiable ? 'show': 'hidden'}>
         { title }
       </div>
    );
  }
}
function createNotification() {
  const div = document.createElement('div');
  //ref 属性: 取已经挂载的元素的 DOM 节点 拿到类上面的实例
  const ref = React.createRef();
  //ref = { current: } 
  // ref.current = new Notification();
  // ref.current.open
  // ref.current.close
  ReactDOM.render(<Notification ref={ref}/>, div);
  document.body.appendChild(div);
  return {
    open: ref.current.open,
    close: ref.current.close,
  }
}
let notification = null;
if(!notification) {
  const { open, close } = createNotification();
  notification = {
    open,
    close
  }
}
export default notification;

