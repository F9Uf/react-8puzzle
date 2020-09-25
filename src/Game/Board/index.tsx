import React, { useEffect, useState } from 'react';
import Block from './Block';
import './index.css'

const DEFAULT_PUZZLE = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', ' '],
]

function Board() {
  const [puzzle, _] = useState(DEFAULT_PUZZLE);
  const [width, setWidth] = useState(computedSize(window.innerWidth, window.innerHeight));
  const [height, setHeight] = useState(computedSize(window.innerWidth, window.innerHeight));

  function computedSize(width: number, height: number): number {
    const padding = 50;
    if (width < height) {
      return ((width - 20) / 3) - padding;
    }
    return ((height - 20) / 3) - padding;
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
  })

  return (
    <div className="board">
      {puzzle.map((row, rIndex) => {
        return row.map((col, cIndex) => {
          return <Block
            key={rIndex + cIndex}
            value={col} 
            width={width}
            height={height}
          />
        })
      })
      }
    </div>
  );
}

export default Board;