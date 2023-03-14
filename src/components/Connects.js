import React from 'react'
import './styles/connects.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Divider } from '@mui/material';


export default function Connects({user}) {
  return (
    <div>
        <div className='connect'>
           <img className='connectImg' src={user.profilePicture} alt='/'/>
           <div>
            <h4>{user.username}</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
           
          </div>
          <Divider />
    </div>
  )
}
