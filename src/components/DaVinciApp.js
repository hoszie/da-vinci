import React from 'react';
import Header from './Header';
import Image from './Image';

export default class DaVinciApp extends React.Component {

  
  render() {
    const title = 'Da Vinci App';
    return (
      <div>
        <Header title={title}/>
        <Image />
      </div>
    )
  }
}