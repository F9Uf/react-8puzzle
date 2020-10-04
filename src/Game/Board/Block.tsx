import React from 'react';
import './Block.css';

interface blockProps {
  value?: String;
  width?: number;
  height?: number;
}

function Block(props: blockProps) {
  return (
    <div
      className={`block ${props.value === ' ' || props.value === '' ? 'is-empty' : ''}`}
      style={{
        width: props.width,
        height: props.height
      }}
    >
      {props.value}
    </div>
  );
}

export default Block;