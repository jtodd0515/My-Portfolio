import React, { useState } from "react";
import FsLightbox from 'fslightbox-react';

export const Gallery = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setVisible(!visible)}
      >
        toggle lightbox
        </button>
      <FsLightbox
        toggler={visible}
        urls={[
          'https://i.imgur.com/fsyrScY.jpg'
          // '/images/weatherapp1.png',
          // '/images/weatherapp2.png',
          // 'image3.jpg',
          // 'image4.jpg',
          // 'image5.jpg',
          // 'image6.jpg'
        ]}
      />
    </div>
  );
};

export default Gallery;