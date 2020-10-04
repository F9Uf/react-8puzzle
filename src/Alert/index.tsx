import React from 'react';
import './index.css';

interface AlertProps {
  moveCount: number;
  onTryAgain: () => void;
}

function Alert(props: AlertProps) {
  return (
    <div className="alert-wrapper">
      <div className="alert-box">
        Win With <span className="highlight">{props.moveCount}</span> Move!
        <br />
        <span
          className="tryAgain"
          onClick={props.onTryAgain}
        >
          Try Again ?
        </span>
      </div>
    </div>
  )
}

export default Alert;