// src/components/AlertModal/AlertModal.tsx
import React from 'react';
import './styles.css';

interface AlertModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  onClose: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ isOpen, title, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2>{title}</h2>
        <p>{message}</p>
        <button className="modal-close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default AlertModal;
