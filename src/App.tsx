// src/App.tsx

import React, { useState } from 'react';
import './App.css';
import AlertModal from './Components/Alert/index';
import Button from './Components/Button/index';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = async () => {
    // Simula uma operação assíncrona
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsModalOpen(true);
  };

  const showAlert = () => {
    setIsModalOpen(true);
  };

  const closeAlert = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button text="Clique aqui!" onClick={handleButtonClick} />
        <button onClick={showAlert}>Mostrar Alerta</button>
      </header>
      <AlertModal
        isOpen={isModalOpen}
        title="Alerta"
        message="Este é um alerta genérico."
        onClose={closeAlert}
      />
    </div>
  );
}

export default App;
