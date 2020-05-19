import React from 'react';
import Header from './Header';
import Image from './Image';
import NextButton from './NextButton';

export default class DaVinciApp extends React.Component {
  state = {
    options: 0,
    selectedOption: undefined
  }

  nextPiece = () => {
    const bitch = this.state.options++;
    console.log(this.state.options, 'state.options');
    this.setState(() => ({
      selectedOption: bitch
    }))
    console.log(this.state.selectedOption, 'selectedOption');
    // const randomNum = Math.floor(Math.random() * images.length);
    // console.log(randomNum);
    // const option = randomNum;
    // this.setState(() => ({
    //   selectedOption: option
    // }));

  }
  
  render() {
    const title = 'Da Vinci App';
    return (
      <div>
        <Header title={title}/>
        <NextButton nextPiece={this.nextPiece}/>
        <Image nextPiece={this.nextPiece}/>
      </div>
    )
  }
}