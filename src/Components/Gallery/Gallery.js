import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';


export const images = [
  {
    original: '/images/weatherapp1.png',
    thumbnail: '/images/weatherapp1.png',
  },
  {
    original: '/images/weatherapp2.png',
    thumbnail: '/images/weatherapp2.png',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
class Gallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
    
  }
  
}
export default Gallery;