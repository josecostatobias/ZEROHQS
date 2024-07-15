import React, { useState } from 'react';
import './styles.css';
import Loading from '../Loading'; // Importe o componente de loading

interface ButtonProps {
  text: string;
  onClick: () => Promise<void>; // Assume que onClick retorna uma Promise
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    setIsLoading(false);
  };

  return (
    <button className="button" onClick={handleClick} disabled={isLoading}>
      {isLoading ? <Loading /> : text}
    </button>
  );
}

export default Button;