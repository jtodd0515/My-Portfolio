import React, { Component } from "react";
import Lightbox from 'fslightbox-react'; 

export default class ImageLightbox extends Component {
  state = {
    isVisible: true,
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible })
          }}
        >
          toggle lightbox
        </button>
        <Lightbox
          toggler={this.state.isVisible}
          urls={[
            '../../images/weatherapp1.png',
            '../../images/weatherapp2.png',
            'image3.jpg',
            'image4.jpg',
            'image5.jpg',
            'image6.jpg'
          ]}
        />
      </div>
    );
  }
}