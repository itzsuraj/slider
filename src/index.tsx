import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slide';
import ScrollToTop from './components/ScrollToTop';
import slide1 from '../src/images/slide1.jpeg';
import slide2 from '../src/images/slide2.jpeg';
import slide3 from '../src/images/slide3.jpg';


const imageUrls = [
  slide1,
  slide2,
  slide3,
  // Add more image URLs as needed
];

const App = () => {
  return (
    <div>
      <h1>Image Slider</h1>
      <Slider items={imageUrls} />
      <ScrollToTop />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
