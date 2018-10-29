import React, { Component } from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import '../styles/Login.css'
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      password:'',
      errorMessage:''
    }
  }
  async componentWillMount (){
    let accessToken = await localStorage.getItem('access_token');
    if (accessToken) {
      this.props.history.push('/feed');
    }
  }
  handleChange = (id, value) => {
    this.setState({ [id]: value})
  }

  submitLogin = async() => {
    let {
      email,
      password
    } = this.state
    if(email && password){
      if(email == 'dhamo@gmail.com' && password == 'admin123'){
        await localStorage.setItem('access_token', 'f8eafb09acc24aa59edb5e53126e7464');
        this.setState({errorMessage: ''})
      }
      else {
        this.setState({errorMessage: 'Invalid email and password'})
      }
    }
    else {
      this.setState({errorMessage: 'Please enter email and password'})
    }
  }

  render() {
    let {
      email,
      password,
      errorMessage
    } = this.state
    return (
      <div className="login-container-overview">
        <div className="mini-container">
          <div className="login-container">
            <div className="content-wrapper">
              <div>
                <p className='signin-title'>Login to continue </p>
                 <p className="label-button">Email</p>
                 <Input
                   value={email}
                   onChange={(e) => this.handleChange('email', e.target.value)}
                   placeholder='Email'
                   style={{marginBottom: 15}}
                />
                <p className="label-button">Password</p>
                <Input
                  value={password}
                  type='password'
                  onChange={(e) => this.handleChange('password', e.target.value)}
                  placeholder='Password'
                  style={{marginBottom: 15}}
                />
                <div className="sign-up-error-message ">
                 <p>{errorMessage}</p>
                </div>
              </div>
              <div className="submit-button" onClick={() => this.submitLogin()}>
                <p>Login</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
