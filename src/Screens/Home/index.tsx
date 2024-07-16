import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../../Components/Alert/index';
import Button from '../../Components/Button/index';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = async () => {
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
    <div>
      <h1>Tela Inicial</h1>
      <div>
        <header>
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
      <nav>
        <ul>
          <li><Link to="/zerohqs">ZeroHQs</Link></li>
          <li><Link to="/zeroworldpower">ZeroWorldPower</Link></li>
          <li><Link to="/zeroclaysculpture">ZeroClaySculpture</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;