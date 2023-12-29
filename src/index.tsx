import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slide';
import ScrollToTop from './components/ScrollToTop';

const imageUrls = [
  '../src/images/slide1.jpeg',
  '../src/images/slide2.jpeg',
  '../src/images/slide3.jpeg',
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
