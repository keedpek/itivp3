import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { MAIN_ROUTE, STORIES_ROUTE, GALLERY_ROUTE, ABOUT_ROUTE } from '../../utils/consts';
import logo from '../../assets/images/logo.png'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className={style["header-nav-menu"]}>
        <ul>
          <li>
            <button
              className={style.navButton}
              onClick={() => {navigate(MAIN_ROUTE)}}
            >
              Главная
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {navigate(STORIES_ROUTE)}}
            >
              Истории
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {navigate(GALLERY_ROUTE)}}
            >
              Галерея
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {navigate(ABOUT_ROUTE)}}
            >
              О себе
            </button>
          </li>
        </ul>
      </nav>
      <div className={style["header-buttons"]}>
        <button className={style["header-signup-btn"]}>Зарегистрироваться</button>
        <button className={style["header-signin-btn"]}>Войти</button>
      </div>
      <button className={style["burger-menu"]}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={style["mobile-menu"]}>
        <ul>
          <li><a href="./index.html">Главная</a></li>
          <li><a href="./stories/index.html">Истории</a></li>
          <li><a href="./gallery/index.html">Галерея</a></li>
          <li><a href="./aboutUs/index.html">О себе</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
