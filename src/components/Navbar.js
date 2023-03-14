import React, { Component } from 'react'
import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LogoutIcon from '@mui/icons-material/Logout';
import "./styles/navbar.css"
import logo from '../Assets/logo.jpg'



class Navbar extends Component {


    //hamburger menu
    state = { clicked: false };
    handleClick = () => {
        this.setState({clicked: ! this.state.clicked})
    }

    render() {
    return (
      <nav >
        <div className='logo'>
            <img src={logo} alt='/' />
        </div>
        <div id='icons' className={this.state.clicked ? "#navbar active" : "#navbar"}>
        <div className='icon'>
         
        <Link to="/" >
            <HomeIcon />
            <p>Home</p>
        </Link>
        </div>
        <div className='icon'>
        <Link to="/" >
            <AppsIcon />
            <p>Our Apps</p>
        </Link>
        </div>
        <div className='icon'>
        <Link to="/" >
            <NotificationsActiveIcon />
            <p>Notifications</p>
        </Link>
        </div>
        <div className='icon'>
        <Link to="/" >
            <LogoutIcon />
           <p>Logout</p>
        </Link>
        </div>

        {/**mobile nav */}
        <div className='barsResponsive'>
        <div className='icon'>
        <Link to="/" >
           <p>Explore && Groups</p>
        </Link>
        </div>
        <div className='icon'>
        <Link to="/" >
           <p>Add Connects</p>
        </Link>
        </div>
        </div>


        </div>

        {/**resposnsive features*/}
        <div id="mobile" onClick={this.handleClick}>
        <i
        id = "bar"
        className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    )
  }
}

export default Navbar
