import React, { Component } from 'react'
import './styles/rightbar.css'
//import android from '../Assets/android.jpg'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import dp from '../Assets/img1.jpg'
import { Divider } from '@mui/material';

 class Rightbar extends Component {
  render() {
    return (
      <div className='rightbarWrapper'>
        <h3>Add connections</h3>
        <Divider />
       {/**<img className='androidLogo' src={android} alt='/' /> */} 
        <div className='rightbar'>
          
          <div className='connect'>
           <img className='connectImg' src={dp} alt='/'/>
           <div>
            <h4>Fundi Halisi</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
          </div>
          <Divider />
          <div className='connect'>
           <img className='connectImg' src={dp} alt='/'/>
           <div>
            <h4>Fundi Halisi</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
          </div>
          <Divider />
          <div className='connect'>
           <img className='connectImg' src={dp} alt='/'/>
           <div>
            <h4>Fundi Halisi</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
          </div>
          <Divider />
          <div className='connect'>
           <img className='connectImg' src={dp} alt='/'/>
           <div>
            <h4>Fundi Halisi</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
          </div>
          <Divider/>
          <div className='connect'>
           <img className='connectImg' src={dp} alt='/'/>
           <div>
            <h4>Fundi Halisi</h4>
            <p>Carpenter</p>
           </div>
           <AddCircleIcon htmlColor='blue'/>
          </div>
          <div className='button'>
          <button >More Connections</button>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Rightbar
