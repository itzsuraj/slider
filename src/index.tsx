import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/Slide'; // Update the path according to your file structure

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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
