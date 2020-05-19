import React from 'react';
import array from '../artwork/images';

const Image = (props) => (
  <main>
    {/* {images.map(({id, src, title}) => <img key={id} src={src} title={title} />)} */}
    {array[props.selectedOption]}

  </main>
);

export default Image;