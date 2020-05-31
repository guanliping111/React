import React from 'react';
class Notification extends React.Component {
  // class 属性
  state = {
    visiable: true
  }
  render() {
    const { visiable } = this.state;
    const { children } = this.props;
    return (
       <div className={visiable ? 'show': 'hidden'}>
         { children }
       </div>
    );
  }
}

export default Notification;