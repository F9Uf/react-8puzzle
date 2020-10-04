import React, { useState } from 'react';
import Alert from './Alert';
import './App.css';

import Board from './Game/Board';
import Pannel from './Game/Pannel'

function randomPuzzle(): string[][] {
  return [
    [' ', '3', '4'],
    ['1', '7', '2'],
    ['5', '8', '6']
  ];
}

function App() {
  const [moveCount, setMoveCount] = useState(0);
  const [puzzle, setPuzzle] = useState(randomPuzzle);
  const [isWin, setIsWin] = useState(false);

  function tryAgain(): void {
    setIsWin(false);
    setMoveCount(0);
    setPuzzle(randomPuzzle());
    return;
  }

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
          onTryAgain={() => {
            tryAgain();
            console.log('try again');
          }
        }
        />
      }
    </div>
  );
}

export default App;
