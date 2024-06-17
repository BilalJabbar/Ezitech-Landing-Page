import React from 'react';
import './footer.scss';
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section about">
                    <h3>ABOUT</h3>
                    <p>
                        Ezitech Institute provides a platform for newcomers to launch their IT and freelancing careers. Our emphasis on practical information technology courses that are career and work oriented makes us the top computer institute in Rawalpindi, Islamabad, Pakistan.
                    </p>
                </div>
                <div className="footer-section pages">
                    <h3>PAGES</h3>
                    <ul>
                        <li><a href="https://eziblog.org/">BLOG</a></li>
                        <li><a href="https://ezicoding.com/">EZICODING</a></li>
                        <li><a href="https://register.ezitech.org/">INTERNSHIP</a></li>
                        <li><a href="https://services.ezitech.org/?_gl=1*121mcxq*_ga*MjA5MjQzNDExNS4xNzE4MTcwMTY2*_ga_2XEX0EBCTP*MTcxODQzNTk0OC4xMy4xLjE3MTg0MzU5NjMuMC4wLjA.">OUR SERVICES</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>CONTACT</h3>
                    <p><IoLocation style={{color:'blue', marginRight:'10px',fontSize:'20px'}}/>Office #304-B Amna Plaza, near Radio Pakistan, Rawalpindi, Punjab 46000</p>
                    <p><FaPhone style={{color:'blue', marginRight:'10px',fontSize:'20px'}}/>+923455555396</p>
                    <p><MdEmail style={{color:'blue', marginRight:'10px',fontSize:'20px'}}/><a href="mailto:info@ezitech.org" style={{textDecoration:'none',color:'white'}}>info@ezitech.org</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2024 Ezitech Institute | Design & Develop by Eziline Software House.</p>
            </div>
        </footer>
    );
};

export default Footer;
