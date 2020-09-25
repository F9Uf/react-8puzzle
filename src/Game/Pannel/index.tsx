import React from 'react';
import './index.css'

function Pannel() {
  return (
    <div className="pannel">
      <div className="pannel-left">
        MOVE: 100
      </div>
      <div className="pannel-right">
        TIME: 10s
        <button>
          RESTART
        </button>
      </div>
    </div>
  );
}

export default Pannel;