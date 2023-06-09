import React, { Component } from 'react';
import './styles/sidebar.css';
import dp from '../Assets/img1.jpg'
import { Divider } from '@mui/material';


 class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='profileWrapper'>
          <div className='profileImg'>
            <img src={dp} alt='' />
          </div>
          <h1>John Doe</h1><br/>
          <p>Technician / Electrician</p>
          <div className='views'>
          <p>Profile Views</p>
          <span className='profileViews'>5</span>
          </div>
          <div className='views'>
          <p>Completed jobs</p>
          <span className='completedJobs'>101</span>
          </div>
          <button className='profileButton'>Edit my profile</button>
        </div> 
        <div className='exploreWrapper'>
          <h2>Explore</h2>
          <p>#Building & Construction</p>
          <p>#Hustlers</p>
          <p>#Food & Drinks</p>
          <p>#Beauty</p>
          <p>#Medical Care</p>
        </div>
        <Divider />
        <div className='groupsWrapper'>
          <h2>Groups</h2>
          <p>Carpenters(1057)</p>
          <p>Plumbers(800)</p>
          <p>Hotels(761)</p>
          <p>Beautificians(200)</p>
          <p>Doctors(503)</p>
        </div>
      </div>
    )
  }
}

export default Sidebar
