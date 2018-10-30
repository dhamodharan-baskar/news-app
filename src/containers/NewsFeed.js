import React, { Component } from 'react';
import axios from 'axios';
import { Icon } from 'antd';
import Navbar from '../components/Navbar'
import NewsTab from '../components/NewsTab'
import '../styles/NewsFeed.css'

class NewsFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token:'',
      loading: true,
      newsList: []
    }
  }
  async componentWillMount (){
    let accessToken = await localStorage.getItem('access_token');
    if (!accessToken) {
      this.props.history.push('/login');
    }
    else {
      this.setState({token: accessToken},
      () => this.getNews() )
    }
  }

  getNews = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${this.state.token}`)
        .then(response => {
          this.setState({newsList: response.data.articles, loading:false})
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logout = async() => {
    await localStorage.removeItem('access_token')
    window.location.href = '/'
  }

 redirect = (data) => {
   window.open(data.url, '_blank');
 }


  render() {
    let{
      loading,
      newsList
    } = this.state
    return (
      <div className="newsfeed-overview">
        <Navbar logout={this.logout} />
        <div className="news-tab-list">
         {
           !loading ?
           <div>
            {
              newsList.map((item, index) => {
              return(
                 <NewsTab
                  data={item}
                  key={index}
                  redirect={this.redirect}
                 />
                )
              })
            }
           </div>
           :
           <Icon type="loading" style={{ fontSize: 60 , marginTop: 50}} spin />
         }
        </div>
      </div>
    );
  }
}

export default NewsFeed;
