import React from 'react';
import array from '../artwork/images';

const Image = (props) => (
  <main>
    <h3>{array[props.options]}</h3>
    <h3>{array}</h3>
    <h3>{array[0]}</h3>


    {/* {images.map(({id, src, title}) => <img key={id} src={src} title={title} />)} */}

  </main>
);

export default Image;