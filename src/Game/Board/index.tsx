import React, { useEffect, useState } from 'react';
import Block from './Block';
import './index.css'

const DEFAULT_PUZZLE = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', ' '],
]

interface puzzleProps {
  puzzleBlock: string[][];
  onMove: (count: number) => void;
  onWin: (win: boolean) => void;
}

type MoveDir = 'left' | 'right' | 'top' | 'bottom' | 'none';

function Board(props: puzzleProps) {
  const [puzzle, setPuzzle] = useState(props.puzzleBlock);
  const [width, setWidth] = useState(computedSize(window.innerWidth, window.innerHeight));
  const [height, setHeight] = useState(computedSize(window.innerWidth, window.innerHeight));

  function computedSize(width: number, height: number): number {
    const padding = 15;
    if (width < height) {
      return ((width - 20) / 3) - padding;
    }
    return ((height - 20) / 3) - padding - 5;
  }

  function movePuzzle(row: number, col: number): void {
    const dir = moveDirection(row, col);
    if (dir === 'none') return;

    const temp = [...puzzle];

    if (dir === 'top') {
      [temp[row - 1][col], temp[row][col]] = [temp[row][col], temp[row - 1][col]];
    } else if (dir === 'bottom') {
      [temp[row + 1][col], temp[row][col]] = [temp[row][col], temp[row + 1][col]];
    } else if (dir === 'left') {
      [temp[row][col - 1], temp[row][col]] = [temp[row][col], temp[row][col - 1]];
    } else if (dir === 'right') {
      [temp[row][col + 1], temp[row][col]] = [temp[row][col], temp[row][col + 1]];
    }

    setPuzzle(temp);
    props.onMove(1);
    props.onWin(isWin());
  }

  function moveDirection(row: number, col: number): MoveDir {
    if (isWin()) return 'none';
    if (row !== 0 && puzzle[row - 1][col].trim() === '') return 'top';
    if (row < puzzle.length - 1 && puzzle[row + 1][col].trim() === '') return 'bottom';
    if (col !== 0 && puzzle[row][col - 1].trim() === '') return 'left';
    if (col < puzzle[row].length - 1 && puzzle[row][col + 1].trim() === '') return 'right';
    return 'none'
  }

  function isWin(): boolean {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if (puzzle[i][j] !== DEFAULT_PUZZLE[i][j]) return false
      }
    }
    return true;
  }

  function moveFromDirection(dir: MoveDir) {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        if (moveDirection(i, j) === dir) {
          return movePuzzle(i, j);
        }
      }
    }
    return;
  }

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const boxSize = computedSize(windowWidth, windowHeight);
      setWidth(boxSize);
      setHeight(boxSize);
    }
    window.addEventListener('resize', handleResize)
  });

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent) {
      // event.preventDefault();
      const availableKeyboardEvent = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      const availableDirection: MoveDir[] = ['top', 'bottom', 'left', 'right'];
      const keyIndex = availableKeyboardEvent.indexOf(event.key);
  
      if (keyIndex < 0) return;
      return moveFromDirection(availableDirection[keyIndex]);
    }

    window.addEventListener('keydown', handleKeyPress)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setPuzzle(props.puzzleBlock);
  }, [props.puzzleBlock]);

  return (
    <div
      className="board"
      style={{
        gridTemplateRows: `${width}px ${width}px ${width}px`,
        gridTemplateColumns: `${width}px ${width}px ${width}px`
      }}
    >
      {puzzle.map((row, rIndex) => {
        return row.map((col, cIndex) => {
          return <Block
            key={rIndex + cIndex}
            value={col} 
            width={width}
            height={height}
            onClick={() => movePuzzle(rIndex, cIndex)}
          />
        })
      })
      }
    </div>
  );
}

export default Board;