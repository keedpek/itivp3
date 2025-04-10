import React from 'react';
import style from './NotFoundPage.module.css'
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/consts';
import Header from '../../components/Header/Header';

const NotFoundPage = () => {
  const navigate = useNavigate()


  return (
    <>
    
    <div className={style["container"]}>
      <h2>404</h2>
      <p>Такой страницы нет</p>
      <button 
        className={style["to-main-btn"]}
        onClick={() => {navigate(MAIN_ROUTE)}}
      >
        На главную страницу
      </button>
    </div>
    </>
  );
};

export default NotFoundPage;
