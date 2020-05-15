import React from 'react';
import images from '../artwork/images';

const Image = () => (
  <main>
    {images.map(({id, src, title}) => <img key={id} src={src} title={title} />)}

  </main>
);

export default Image;