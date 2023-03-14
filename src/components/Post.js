import React from 'react'
import './styles/posts.css'
import helmet from '../Assets/img1.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import { Divider } from '@mui/material';
import { Users } from '../dummyData'



export default function Post({post}){
  const user = Users.filter(u=>u.id===1)

  console.log(user[0].username)
    return (
      <div className='posts'>
        <div className='postsWrapper'>
            <div className='postTop'>
                <div className='topLeft'>
                    <img className='postProfileImg'
                     src={Users.filter((u) => u.id === post.userId)[0].profilePicture} 
                     alt="/"/>
                    <span className='postUsername'>
                        {Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className='topRight'>
                    <MoreHorizIcon />
                </div>
            </div>
            <Divider />
            <div className='postCenter'>
                <span className='postText'>{post?.desc}</span>
                <img className="postImg"src={post.img} alt="/"/>
            </div>
            
            <div className='postBottom'>
                    <div className='bottomLeft'>
                        <ThumbUpIcon className='likeIcon' />
                        <span>{post.like} likes</span>
                    </div>
                    <div className='bottomRight'>
                        <CommentIcon className='likeIcon'/>
                        <span>{post.comment}Comments</span>
                    </div>
            </div>
            <Divider />
            <div className='comment'>
            <img className="postProfileImg" src={helmet} alt="" />
            <div className='commentBox'>
                <div className='commentBoxTop'>
                    <div>
                     <h4>John Doe</h4>
                    <p>Carpenter</p>
                    </div> 
                    <span>1 wk ago</span>
                </div>
                <div className='commentBoxCenter'>
                    <p>Good work</p>
                </div>
                <div className='commentBoxBottom'>
                    <ThumbUpIcon className='likeIcon' />
                    
                </div>
            </div>
            </div>
        </div>
      </div>
    )
}

