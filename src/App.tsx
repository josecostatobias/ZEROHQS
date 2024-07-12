// src/App.tsx
import React from 'react';
import './App.css';
import Button from './Components/Button/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="Clique aqui!" />
      </header>
    </div>
  );
}

export default App;