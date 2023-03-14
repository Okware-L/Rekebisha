import React from 'react'
import './styles/rightbar.css'
//import android from '../Assets/android.jpg'
import { Divider } from '@mui/material';
import Connects from './Connects';
import { Users } from '../dummyData'

 export default function Rightbar () {
    return (
      <div className='rightbarWrapper'>
        <h2>Add connections</h2>
        <Divider />
       {/**<img className='androidLogo' src={android} alt='/' /> */} 
        <div className='rightbar'>
        {Users.map((u) => (
          <Connects key={u.id} user={u} />
        ))}
          <div className='button'>
          <button >More Connections</button>
          </div>
        </div>
      </div>
    ) 
  } 

//
//{Users.map((u) => (
 // <Connects key={u.id} user={u} />
 // ))}
//
