import React from 'react';
import images from '../artwork/images';

const Image = () => (
  <div>
    {/* THIS IS THE OBJECTS  */}
    {images.map(({id, src, title}) => <img key={id} src={src} title={title} />)}
    
  {/* <img src={require(tls)} /> */}
  {/* <p>{strings[0].title}</p> */}

  {/* {images.map(({title, year, medium}) => <p>{title} was created {year} by a medium of {medium}.</p>)} */}
  
  {images.map(source =>  <img src={source.src} />)}

  </div>
);

export default Image;