import React from 'react';
import style from './Footer.module.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo"/>
      <span className={style["footer-copyright"]}>© 2023 Travel Pulse. Все права защищены</span>
    </footer>
  );
};

export default Footer;
