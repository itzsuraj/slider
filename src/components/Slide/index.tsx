import React, { useState, useEffect } from 'react';
import '../Slide/style.css'; // Include your CSS file for styling

interface SliderProps {
  images: string[];
  effect: 'fade' | 'slide';
}

const Slider: React.FC<SliderProps> = ({ images, effect }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeImage, setFadeImage] = useState(images[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (effect === 'fade') {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setFadeImage(images[currentImageIndex]);
        setIsTransitioning(false);
      }, 500); // Set your transition time here

      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, effect, images]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`slider ${effect === 'fade' ? 'fade' : 'slide'}`}>
      {effect === 'fade' ? (
        <img
          src={fadeImage}
          alt={`slide ${currentImageIndex}`}
          className={`fade ${isTransitioning ? 'fade-out' : 'fade-in'}`}
        />
      ) : (
        <div className="slide-container">
          <div className="slides" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`slide ${index}`} className="slide" />
            ))}
          </div>
        </div>
      )}
      <div className="parent-btn">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};


export default Slider;
