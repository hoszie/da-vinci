import React from 'react';
import images from '../artwork/images';

const Image = () => (
  <div>
    {images.map(({id, src, title}) => <img key={id} src={src} title={title} />)}
  {/* <img src={require(tls)} /> */}
  {/* <p>{strings[0].title}</p> */}

  {images.map(({title, year, medium}) => <p>{title} was created {year} by a medium of {medium}.</p>)}
  
  {images.map(source =>  <img src={source.src} />)}
  
  
  <img src='https://en.wikipedia.org/wiki/The_Last_Supper_(Leonardo)#/media/File:The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg' />

  </div>
);

export default Image;