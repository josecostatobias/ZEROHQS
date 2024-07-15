import React from 'react';
import './styles.css'; // Vamos criar um arquivo CSS para estilização

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      
    </div>
  );
}

export default Loading;