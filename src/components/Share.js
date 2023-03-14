import React, { useState, useRef } from 'react'
import './styles/share.css'
import helmet from '../Assets/img1.jpg'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import CloseIcon from '@mui/icons-material/Close';



 const Share = () => {

  //adding media, no preview functionality
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    
    const onImageChange = (event) => {
      if( event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        setImage({
          image: URL.createObjectURL(img)
        })
      }
    }

    return (
      <div className='postWrapper'>
        <img src={helmet} alt="" />
        <div>
          <input type="text" placeholder="Write your post here"/>
          <div className='postOptions'>
          <div className='option'
            onClick={ () => imageRef.current.click()}
          >
            <PermMediaIcon htmlColor='green'/>
            <div style={{display:"none"}}>
              <input type="file" name="myImage" ref={imageRef} onChane={onImageChange} />
            </div>
           <p>media </p> 
          </div>
          

          {/**preview not working ,,, wth meeen */}
          {image && (
            <div className='previewImage'>
              <CloseIcon />
            </div>
          )} 


          
          <button className='postButton'>
            post
          </button>
          </div> 
        </div>
        </div>
    )
  }


export default Share
