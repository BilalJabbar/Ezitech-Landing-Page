import React from 'react';
import './services.scss';
import vector1 from '../images/contact.png'; 
import vector2 from '../images/off1.png';
import vector3 from '../images/off2.png';
import s1 from '../images/ml.png'
import s2 from '../images/blockchain.png'
import s3 from '../images/amazon.png'
import s4 from '../images/cyber.png'
import s5 from '../images/development.png'
import s6 from '../images/designing.png'
import s7 from '../images/gaming.png'
import s8 from '../images/architecture.png'
import s9 from '../images/mobile.png'
import s10 from '../images/marketing.png'
import s11 from '../images/threeD.png'
import s12 from '../images/animation.png'

const Services = () => {


  const services = [
    { name: "ML & AI", image: s1 },
    { name: "Block Chain", image: s2  },
    { name: "Amazon", image: s3 },
    { name: "Cybersecurity", image: s4 },
    { name: "Development", image: s5 },
    { name: "Designing", image: s6 },
    { name: "Gaming", image: s7 },
    { name: "Architecture", image: s8 },
    { name: "IOS & AND", image: s9 },
    { name: "Marketing", image: s10 },
    { name: "3D", image: s11 },
    { name: "Animation", image: s12 }
  ];

    return (
        <div className="services">
            <div className="services-row">
                <h1>How it works?</h1>
            </div>
            <div className="services-row">
                <img src={vector1} alt="Vector 1" className="vector-image" />
                <img src={vector2} alt="Vector 2" className="vector-image" />
                <img src={vector3} alt="Vector 3" className="vector-image" />
            </div>
            <div className="services-row grid-layout">
        {services.map((service, index) => (
          <div key={index} className="grid-item">
            <img src={service.image} alt={service.name} className="grid-image" />
            <p>{service.name}</p>
          </div>
        ))}
      </div>
        </div>
    );
};

export default Services;
