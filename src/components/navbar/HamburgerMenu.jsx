import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './hamburgerMenu.module.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
        className={`${classes.hamburgerIcon} ${isOpen ? classes.open : ''}`} 
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      {/* The slide-in menu panel */}
      <ul className={`${classes.slideMenu} ${isOpen ? classes.show : ''}`}>
        <li className={classes.menuItem} onClick={closeMenu}><Link to="/">Home</Link></li>
        <li className={classes.menuItem} onClick={closeMenu}><Link to="/about">About</Link></li>
        <li className={classes.menuItem} onClick={closeMenu}><Link to="/contact">Contact</Link></li>
        <li className={classes.menuItem} onClick={closeMenu}><Link to="/services">Services</Link></li>
      </ul>
    </>
  );
};

export default HamburgerMenu;