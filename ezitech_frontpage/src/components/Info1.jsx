import React, { useEffect } from 'react';
import './info1.scss';
import sampleImage from '../images/infor1_mobile.webp';
import googlePlay from '../images/google_play.png'; 
import appleStore from '../images/apple_store.webp'; 

const Info1 = () => {
    useEffect(() => {
        const handleMouseMove = (event) => {
            const infoLeft = document.querySelector('.info1-left');
            const { clientX, clientY } = event;
            const { innerWidth, innerHeight } = window;
            const moveX = (innerWidth / 2 - clientX) * 0.05;
            const moveY = (innerHeight / 2 - clientY) * 0.05;
            infoLeft.style.transform = `translate(${-moveX}px, ${-moveY}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="info1">
            <div className="info1-left">
                <div className="blue-circle">
                    <img src={sampleImage} alt="Sample" className="circle-image" />
                </div>
            </div>
            <div className="info1-right">
                <h2>Learning <span>anytime</span> from anywhere</h2>
                <p>
                    Increase the mobility level with Eziline Technologies LMS App. Take your courses in your pocket and access them whenever you want without any limits. Make your learning more engaging and productive using modern LMS App.
                </p>
                <div className="store-buttons">
                    <a href='/'><img src={appleStore} alt="Apple Store" className="store-button" /></a>
                    <a href='https://play.google.com/store/apps/details?id=com.ezitech.mobileapp&hl=en&gl=US&pli=1'><img src={googlePlay} alt="Google Play Store" className="store-button" /></a>
                </div>
            </div>
        </section>
    );
};

export default Info1;
