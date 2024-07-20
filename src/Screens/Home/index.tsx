import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AlertModal from '../../Components/Alert/index';
import Button from '../../Components/Button/index';
import './styles.css';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
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
       <Header title="Minha Página">
        <Button text="Ação 1" onClick={async () => { console.log('Ação 1 clicada!'); }} />
        <Button text="Ação 2" onClick={async () => { console.log('Ação 2 clicada!'); }} />
      </Header>
      <h1>Tela Inicial</h1>
      <div>
        <header>
          <Button text="Clique aqui!" onClick={handleButtonClick}></Button>
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
          <li ><Link to="/zerohqs">ZeroHQs</Link></li>
          <li className="Fonte"><Link to="/zeroworldpower">ZeroWorldPower</Link></li>
          <li><Link to="/zeroclaysculpture">ZeroClaySculpture</Link></li>
          <li><Link to="/glasspixelengine">Glass Pixel Engine</Link></li>
        </ul>
      </nav>
      <Footer>
        <span>© 2024 ZeroHQs</span>
        <a href="/privacidade" className="footer-link">Política de Privacidade</a>
        <a href="/termos" className="footer-link">Termos de Uso</a>
      </Footer>
    </div>
  );
}

export default Home;