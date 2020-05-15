import React from 'react';
import Header from './Header';
import Image from './Image';
import NextButton from './NextButton';

export default class DaVinciApp extends React.Component {
  nextPiece = () => {
    console.log('fucking dumb dumb');
  }
  
  render() {
    const title = 'Da Vinci App';
    return (
      <div>
        <Header title={title}/>
        <NextButton nextPiece={this.nextPiece}/>
        <Image />
      </div>
    )
  }
}