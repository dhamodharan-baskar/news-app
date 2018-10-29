import React, { Component } from 'react';
class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token:'',
      newsList: []
    }
  }
  async componentWillMount (){
    let accessToken = await localStorage.getItem('access_token');
    if (!accessToken) {
      this.props.history.push('/login');
    }
    else {
      this.setState({token: accessToken})
    }
  }

  logout = async() => {
    await localStorage.removeItem('access_token')
    window.location.href = '/'
  }
  
  render() {
    return (
      <div>
        <div onClick={() => this.logout()}>
         logout
        </div>
      </div>
    );
  }
}

export default NewsFeed;
