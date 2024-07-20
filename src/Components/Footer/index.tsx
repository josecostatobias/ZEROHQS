import React from 'react';
import './styles.css';

interface FooterProps {
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {children}
      </div>
    </footer>
  );
}

export default Footer;