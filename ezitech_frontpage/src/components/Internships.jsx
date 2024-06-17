import React from 'react';
import './internships.scss';
import img from '../images/coding.jpg';
import iconImg1 from '../images/card1.png'; 
import iconImg2 from '../images/card2.png'; 
import iconImg3 from '../images/card3.png'; 
import iconImg4 from '../images/card4.png'; 
import iconImg5 from '../images/card5.png'; 
import iconImg6 from '../images/card6.png'; 
import { MdOutlineWork } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Internship = () => {
    const internships = [
        {
            id: 1,
            title: "HTML/CSS Javascript",
            institute: "Ezitech Institute",
            employment: "Hybrid",
            location: "Rawalpindi",
            jobType: "Full Time Part Time",
            imgSrc: img,
            iconSrc: iconImg1,
        },
        {
            id: 2,
            title: "GRAPHIC DESIGNING",
            institute: "Ezitech Institute",
            employment: "Remote",
            location: "Islamabad",
            jobType: "Full Time",
            imgSrc: img,
            iconSrc: iconImg2,
        },
        {
            id: 3,
            title: "DIGITAL MARKETING",
            institute: "Ezitech Institute",
            employment: "Remote",
            location: "Islamabad",
            jobType: "Full Time",
            imgSrc: img,
            iconSrc: iconImg3,
        },
        {
            id: 4,
            title: "FLUTTER DEVELOPMENT",
            institute: "Ezitech Institute",
            employment: "Remote",
            location: "Islamabad",
            jobType: "Full Time",
            imgSrc: img,
            iconSrc: iconImg4,
        },
        {
            id: 5,
            title: "MACHINE LEARNING",
            institute: "Ezitech Institute",
            employment: "Remote",
            location: "Islamabad",
            jobType: "Full Time",
            imgSrc: img,
            iconSrc: iconImg5,
        },
        {
            id: 6,
            title: "MERN DEVELOPMENT",
            institute: "Ezitech Institute",
            employment: "Remote",
            location: "Islamabad",
            jobType: "Full Time",
            imgSrc: img,
            iconSrc: iconImg6,
        },
    ];

    return (
        <section className="internships">
            <h2 className="internships-heading">Perfect Internships For You</h2>
            <div className="internships-grid">
                {internships.map(internship => (
                    <div key={internship.id} className="internship-card">
                        <div className="card-image" style={{ backgroundImage: `url(${internship.imgSrc})` }}>
                            <div className="card-image-overlay">
                                <div className="card-info">
                                    <h3>{internship.title}</h3>
                                    <hr />
                                    <p>{internship.institute}</p>
                                </div>
                                <div className="card-icon">
                                    <img src={internship.iconSrc} alt="icon" />
                                </div>
                            </div>
                        </div>
                        <div className="card-details">
                            <p><IoPerson className='icn'/><strong> Employment - </strong> <span>{internship.employment}</span></p>
                            <p><FaLocationArrow className='icn'/><strong> Location - </strong> <span> {internship.location}</span></p>
                            <p><MdOutlineWork className='icn'/><strong> Job Type - </strong> <span> {internship.jobType}</span></p>
                            <button className="read-more">Read More</button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="load-more">Load More</button>
        </section>
    );
};

export default Internship;
