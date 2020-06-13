import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHomeList } from '../../store/actions/home';

class Home extends Component {
  componentDidMount() {
    this.props.fetchHomeList();
  }
  state = {  }
  render() { 
    return ( <div>
      home
      length: { this.props.homeList.length }
    </div> );
  }
}
const mapDispatchToProps = (state) => {
  return {
    homeList: state.getIn(['home', 'homeList'])
  }
}
const mapStateToProps = (dispatch) => {
  return {
    fetchHomeList() {
      dispatch(getHomeList)
    }
  }
}
export default connect(mapDispatchToProps, mapStateToProps)(Home);