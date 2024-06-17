import React from 'react'
import './topbar.scss'
import { FaPhone, FaMapMarkerAlt, FaRegClock, FaFacebook, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {IoPerson} from 'react-icons/io5'
import {RxDividerVertical} from 'react-icons/rx'
const TopBar = () => {
  return (
    <div class="top-bar">
    <div class="container">
        <div class="top-bar-left">
            <FaPhone  className='icon'/><span>+92 3455555396</span>
            <FaMapMarkerAlt className='icon' /><span> Westridge 1, Office #304-B Peshawar Road, Rawalpindi, Pakistan</span>
            <FaRegClock className='icon' /><span>Mon - Fri 8.00 - 20.00</span>
            <div className='social'>
            <a href='https://www.facebook.com/ezitech' ><FaFacebook /></a>
            <a href='https://www.instagram.com/ezitechpk/'><FaInstagram /></a>
            <a href='https://www.linkedin.com/company/eziline-technologies/'><FaLinkedinIn /></a>
            <a href='https://www.youtube.com/channel/UCPJvS7gvIV9nm6paydinYWg'><FaYoutube /></a>
            </div>
        </div>
        <div class="top-bar-right">
            <IoPerson className='icon'/>
            <a href="/login">Login</a>
            <RxDividerVertical className='icon'/>
            <a href="/signup">Register</a>
        </div>
    </div>
</div>

  )
}

export default TopBar