import React, { useState } from 'react';
import Alert from './Alert';
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
  const [isWin, setIsWin] = useState(false);

  return (
    <div className="App">
      <Pannel moveCount={moveCount} />
      <Board
        puzzleBlock={puzzle}
        onMove={() => setMoveCount(moveCount + 1)}
        onWin={(win) => setIsWin(win)}
      />
      {isWin &&
        <Alert 
          moveCount={moveCount}
          onTryAgain={() => console.log('try again')}
        />
      }
    </div>
  );
}

export default App;
