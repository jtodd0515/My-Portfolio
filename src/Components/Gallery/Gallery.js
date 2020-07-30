import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';


export const images = [
  {
    original: 'weatherapp1.png/id/1018/1000/600/',
    thumbnail: 'weatherapp1.png/id/1018/250/150/',
  },
  {
    original: 'weatherapp2.png/id/1015/1000/600/',
    thumbnail: 'weatherapp2.png/id/1015/250/150/',
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