import React from 'react';
import './App.css';

import Board from './Game/Board';
import Pannel from './Game/Pannel'

const puzzle = [
  [' ', '3', '4'],
  ['1', '7', '2'],
  ['5', '8', '6']
]
function App() {
  return (
    <div className="App">
      <Pannel />
      <Board puzzleBlock={puzzle}/>
    </div>
  );
}

export default App;
