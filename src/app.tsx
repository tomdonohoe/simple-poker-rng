import React from 'react';
import ReactDom from 'react-dom';

import PokerRNG from './components/poker-rng';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const App = () => {
  return (
    <>
      <h1>Simple Poker RNG</h1>
      <PokerRNG />
    </>
  )
}

ReactDom.render(<App />, mainElement);
