import React, { useState } from 'react';
import './recommendedCourses.scss';
import { FaRegClock } from 'react-icons/fa';
import course1img from '../images/course1.jpg'
import course2img from '../images/course2.webp'
import course3img from '../images/course3.webp'
import course4img from '../images/course4.webp'
import course5img from '../images/course5.webp'

const courses = [
  {
    id: 1,
    image: course1img,
    category: 'IOS & AND',
    title: 'Flutter & Dart - The Complete Course With Projects',
    duration: '10 hours',
    price: 'PKR37,000',
  },
  {
    id: 2,
    image: course2img,
    category: 'Designing',
    title: 'Adobe Illustrator Course With Projects',
    duration: '3 Months',
    price: 'PKR35,000',
  },
  {
    id: 3,
    image: course3img,
    category: 'Amazon',
    title: 'Online Arbitrage Mastermind 2.0 [Resell Products from Home]',
    duration: '3 Months',
    price: 'PKR34,000',
  },
  {
    id: 4,
    image: course4img,
    category: 'Development',
    title: 'Front-End Course With Projects',
    duration: '65 Days',
    price: 'PKR18,000',
  },
  {
    id: 5,
    image: course5img,
    category: 'Designing',
    title: 'Adobe Photoshop Course',
    duration: '1 Month',
    price: 'PKR15,000',
  },
];

const RecommendedCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < courses.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="recommended-courses">
      <h2>Recommended Courses</h2>
      <div className="courses-container">
        {courses.slice(currentIndex, currentIndex + 4).map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-details">
              <span className="course-category">{course.category}</span>
              <h3 className="course-title">{course.title}</h3>
              <div className="course-info">
                <span className="course-duration"><FaRegClock/>  {course.duration}</span>
                <span className="course-price">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation-buttons">
        <button onClick={prevSlide} className="nav-button">&lt;</button>
        <button onClick={nextSlide} className="nav-button">&gt;</button>
      </div>
    </div>
  );
};

export default RecommendedCourses;
