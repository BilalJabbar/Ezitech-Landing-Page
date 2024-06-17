import React, { useState } from 'react';
import './navbar.scss';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { RxDividerVertical } from 'react-icons/rx';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img alt='logo' src={logo}></img>
      </div>

      <ul className='navbar-nav'>
        <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
          <a href="/#" className="nav-link" onClick={() => handleNavClick('home')}>HOME</a>
        </li>
        <li className={`nav-item ${activePage === 'about' ? 'active' : ''}`}>
          <a href="/#" className="nav-link" onClick={() => handleNavClick('about')}>ABOUT US</a>
        </li>
        <li className={`nav-item ${activePage === 'certifications' ? 'active' : ''}`}>
  <a href="/#" className="nav-link" 
     onMouseEnter={() => setActivePage('certifications')} 
     onMouseLeave={() => setActivePage('')}
     onClick={() => handleNavClick('certifications')}>
    CERTIFICATIONS
  </a>
  <div className="sub-menu" 
       onMouseEnter={() => setActivePage('certifications')} 
       onMouseLeave={() => setActivePage('')}>
    <ul>
      <li><a href="/#">Free Courses</a></li>
      <li><a href="/#">Onsite Courses</a></li>
    </ul>
  </div>
</li>
        <li className={`nav-item ${activePage === 'internships' ? 'active' : ''}`}>
          <a href="/#" className="nav-link" onClick={() => handleNavClick('internships')}>INTERNSHIPS</a>
        </li>
        <li className={`nav-item ${activePage === 'seminars' ? 'active' : ''}`}>
          <a href="/#" className="nav-link" onClick={() => handleNavClick('seminars')}>SEMINARS</a>
        </li>
        <li className={`nav-item ${activePage === 'registration' ? 'active' : ''}`}>
          <a href="/#" className="nav-link" onClick={() => handleNavClick('registration')}>INTERNSHIP REGISTRATION</a>
        </li>
      </ul>

      <div className="navbar-icons">
        <div><RxDividerVertical className='icons' /></div>
        <div><a href='https://ezitech.org/user-account/' className="nav-link"><FaHeart style={{color:'white'}} /></a></div>
        <div><a href='/' className="nav-link"><FaSearch style={{color:'white'}} /></a></div>
      </div>
    </nav>
  );
};

export default Navbar;
