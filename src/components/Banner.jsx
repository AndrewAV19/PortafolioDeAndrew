import React, { useState, useEffect } from 'react';
import './Banner.css'; 

const Banner = () => {
  const images = [
    '../../public/images/banner-micontrol2.jpg',
    '../../public/images/banner-mitaller2.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <div
          key={index}
          className={`banner-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default Banner;