import React, { Component } from 'react';
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentWillMount (){
    let accessToken = await localStorage.getItem('access_token');
    if (!accessToken) {
      this.props.history.push('/login');
    }
    else {
      this.props.history.push('/feed');
    }
  }

  render() {
    return (
      <div />
    );
  }
}

export default Home;
