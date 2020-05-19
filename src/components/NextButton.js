import React from 'react';

const NextButton = (props) => (
  <div>
    <button 
      className='next-button' onClick={props.nextPiece}>Next</button>
  </div>
);

export default NextButton;