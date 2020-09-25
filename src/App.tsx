import React from 'react';
import './App.css';

import Board from './Game/Board';
import Pannel from './Game/Pannel'

function App() {
  return (
    <div className="App">
      <Pannel />
      <Board />
    </div>
  );
}

export default App;
