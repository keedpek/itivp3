import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Header.module.css'
import { MAIN_ROUTE, STORIES_ROUTE, GALLERY_ROUTE, ABOUT_ROUTE } from '../../utils/consts';
import logo from '../../assets/images/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className={style["header-nav-menu"]}>
        <ul>
          <li>
            <button
              className={style.navButton}
              onClick={() => {
                navigate(MAIN_ROUTE)
                window.scrollTo(0, 0);
              }}
            >
              Главная
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {
                navigate(STORIES_ROUTE)
                window.scrollTo(0, 0);
              }}
            >
              Истории
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {
                navigate(GALLERY_ROUTE)
                window.scrollTo(0, 0);
              }}
            >
              Галерея
            </button>
          </li>
          <li>
            <button
              className={style.navButton}
              onClick={() => {
                navigate(ABOUT_ROUTE)
                window.scrollTo(0, 0);
              }}
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
      <button 
        className={style["burger-menu"]}
        onClick={() => {
          setIsMenuOpen(prev => !prev)
          console.log(isMenuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      {isMenuOpen && (
        <nav className={style["mobile-menu"]}>
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
      )}
    </header>
  );
};

export default Header;
