import React from 'react';
import './styles.css';

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <div className="header-children">
        {children}
      </div>
    </header>
  );
}

export default Header;