import React from 'react';
import { Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ userName, activeSection, onSectionChange }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Menu size={24} className="menu-icon" />
        <span className="navbar-logo">Consolidado</span>
      </div>
      
      <div className="navbar-center">
        {activeSection}
      </div>

      <div className="navbar-right">
        <span className="user-welcome">
          Hola, <strong>{userName}</strong>
        </span>
        <div className="user-avatar">
          {userName.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;