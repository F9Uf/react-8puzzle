import React from 'react';
import './index.css'

interface pannelProps {
  moveCount: number;
}

function Pannel(props: pannelProps) {
  return (
    <div className="pannel">
      <span>
        {props.moveCount}
      </span>
    </div>
  );
}

export default Pannel;