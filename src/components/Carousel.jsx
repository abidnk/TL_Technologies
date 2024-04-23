import React, { useEffect, useState } from "react";
import "./components.css";
import carousel_1 from "../assets/Carousel-1-TL.png"
import carousel_2 from '../assets/Carousel-2-TL.jpg'
import carousel_3 from '../assets/Carousel-3-TL.jpg'
import carousel_4 from '../assets/Carousel-4-TL.jpg'

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  const slides = [carousel_1, carousel_2, carousel_3, carousel_4];

  return (
    <div className="card">
      <div className="container2">
        <div className="carousel">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentSlide ? "active" : ""
              }`}
              style={{
                display: index === currentSlide ? "block" : "none",
              }}
            >
              <img
                src={slide}
                className="carousel-image"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
          <div className="carousel-controls">
            <button onClick={prevSlide} className="butt">
              ❮
            </button>
            <button onClick={nextSlide} className="butt">
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Carousel;
