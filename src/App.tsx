import React, { useState } from 'react';
import Alert from './Alert';
import './App.css';

import Board from './Game/Board';
import Pannel from './Game/Pannel'


function randomPuzzle(): string[][] {
  const MAX_ROW = 3;
  const MAX_COL = 3;
  const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', ' '];
  const shuffleArray = numberArray.sort(() => Math.random() - 0.5);
  let tempArr: string[][] = [];

  for (let i = 0; i < MAX_ROW; i++) {
    let temp = []
    for (let j = 0; j < MAX_COL; j++) {
      temp[j] = shuffleArray[(i * MAX_COL) + j];
    }
    tempArr[i] = temp;
  }

  return tempArr;
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
