import React, { useState } from 'react';
import './App.css';

import Board from './Game/Board';
import Pannel from './Game/Pannel'

const puzzle = [
  [' ', '3', '4'],
  ['1', '7', '2'],
  ['5', '8', '6']
]
function App() {
  const [moveCount, setMoveCount] = useState(0);

  return (
    <div className="App">
      <Pannel moveCount={moveCount} />
      <Board
        puzzleBlock={puzzle}
        onMove={() => setMoveCount(moveCount + 1)}
      />
    </div>
  );
}

export default App;
