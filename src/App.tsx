import React from 'react';
import './App.css';

import Slider from '../src/components/Slide/index';
import  '../src/components/Slide/style.css';
import slide1 from '../src/images/slide1.jpeg';
import slide2 from '../src/images/slide2.jpeg';
import slide3 from '../src/images/slide3.jpeg';

 // Update the path as per your file structure

const App: React.FC = () => {
  const images = [slide1,slide2,slide3]; // Your image URLs

  return (
    <div>
      <h1>Fade Slider</h1>
      <Slider images={images} effect="fade" />
      <h2>Slide Slider</h2>
      <Slider images={images} effect="slide" />
    </div>
  );
};

export default App;
