import React, { Component } from 'react'
import './styles/feed.css'
import Share from './Share'
import Post from './Post'
import { Posts } from '../dummyData'

 class Feed extends Component {
  render() {
    return (
      <div className='feed'>
        <div className='feedWrapper'>
          <div>
            <Share />
            {Posts.map(p=>(
              <Post  key={p.id}post={p}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Feed
