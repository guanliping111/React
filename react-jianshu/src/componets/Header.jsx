import React, { Component } from 'react';
class Header extends Component {
  state = {  }
  shallowEqual(objA, objB) {
      
  }
  shouldComponentUpdate(nextProps, nextState) {

  }
  render() { 
    console.log('header render');
    const { title } = this.props;
    return (
      <div>
        header
      </div>
    );
  }
}
 
export default Header;