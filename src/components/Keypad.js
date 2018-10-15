import React from 'react';

class Keypad extends React.Component {
 
  tickle = () => {
    console.log('Tee hee!');
  }
 
  render() {
    return (
      <button>Tickle me!</button>
    );
  }
}

export default Keypad;
