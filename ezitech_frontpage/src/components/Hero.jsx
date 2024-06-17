import React, { useEffect, useState } from 'react';
import { FaSearch, FaHeart } from 'react-icons/fa';
import './hero.scss';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const texts = ["Programming", "Web Design", "Marketing", "Social Skills"];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('fade-out');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setFadeClass('fade-in');
      }, 1000); // Duration of fade out transition
    }, 3000); // Change text every 3

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [texts.length]);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          Learn the Fundamentals with our <br /> experts in{' '}
          <span className={`animated-text ${fadeClass}`}>{texts[currentIndex]}</span>
        </h1>
        <h2>Utilize the effective learning to reach your Potential!</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search courses..." />
          <FaSearch className="search-icon" />
        </div>
        <h3>Explore our more useful products <FaHeart /></h3>
        <div className='logos'>
          <h1><a href='https://eziblogs.com/'>EZIBLOG</a></h1>
          <h1><a href='https://pos.ezitech.org/'>EZIPOS</a></h1>
          <h1><a href='https://ezicoding.com/'>EZICODING</a></h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
