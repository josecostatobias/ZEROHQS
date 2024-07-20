import React from 'react';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

const ZeroClaySculpture: React.FC = () => {
  return (
    <div>
      <Header title="ZeroClaySculpture">
        <Button text="Ação 1" onClick={async () => { console.log('Ação 1 clicada!'); }} />
        <Button text="Ação 2" onClick={async () => { console.log('Ação 2 clicada!'); }} />
      </Header>
    </div>
  );
}

export default ZeroClaySculpture;
