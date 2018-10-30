import React from 'react'
import '../styles/NewsTab.css'
import moment from 'moment'

const NewsTab = (props) => {
  let{
    data,
    redirect
  } = props
  return(
    <div className="newsfeed-container">
      <div className="header-container">
        <p>{data.title}</p>
        <p>{data.description}</p>
        <p>{moment(data.publishedAt).format('lll')}</p>
      </div>
      <div className="feed-main-content">
       <div className="image-view">
          <img
           onClick={() => redirect(data)}
           src={data.urlToImage}
           style={{ width: '100%', height: '100%'}}
           alt="loading"
          />
       </div>
      </div>
    </div>
  )
}
export default NewsTab
