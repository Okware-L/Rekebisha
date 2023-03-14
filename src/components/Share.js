import React, { Component } from 'react'
import './styles/share.css'
import helmet from '../Assets/img1.jpg'
import PermMediaIcon from '@mui/icons-material/PermMedia';



 class Share extends Component {
  render() {
    return (
      <div className='postWrapper'>
        <img src={helmet} alt="" />
        <div>
          <input type="text" placeholder="Write your post here"/>
          <div className='postOptions'>
          <div className='option'>
            <PermMediaIcon htmlColor='green'/>
           <p>media </p> 
          </div>
          <button className='postButton'>
            post
          </button>
          </div>  
        </div>
        </div>
    )
  }
}

export default Share
