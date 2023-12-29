import React, { useState } from 'react';

const Slider = ({ items }: { items: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("currentIndex", currentIndex);

  const goToPreviousSlide = () => {
    const newIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    console.log("currentIndex", currentIndex);
    console.log("newIndex", newIndex);

    
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider-container">
    <button onClick={goToPreviousSlide}>Previous</button>
    <div className="slide">
      <img src={items[currentIndex]} alt={`Slide ${currentIndex}`} />
    </div>
    <button onClick={goToNextSlide}>Next</button>
  </div>
  );
};

export default Slider;
