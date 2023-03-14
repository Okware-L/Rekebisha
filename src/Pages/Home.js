import React from 'react'
import './styles/home.css'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Rightbar from '../components/Rightbar'
import Feed from '../components/Feed'


export default function Home() {
  return (
    <div>
    <Navbar />
    <div className='home'>
      <div className='homeContainer'>
        <div className='sidebar'>
         <Sidebar />
         </div>
         <div className='feed'>
         <Feed />
         </div>
         <div className='rightbar'>
          <Rightbar />
         </div>
    
    </div>
    </div>
    </div>
  )
}
