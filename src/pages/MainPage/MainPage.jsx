import React from 'react';
import style from './MainPage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CountryCard from '../../components/CountryCard/CountryCard';
import { countriesList } from '../../utils/db';
import { searchIcon } from '../../assets/svg';
import Pagination from '../../components/Pagination/Pagination';

const MainPage = () => {
  return (
    <>
    <Header/>

    <main>  
      <section className={style["main-section-container"]}>
        <div className={style["main-section-text-container"]}>
          <h2>
            Открывая для себя чудеса нашей планеты, совершайте одно приключение за другим
          </h2>
        </div>
      </section>

      <section className={style["main-search-section"]}>
        <h2>Посещенные страны</h2>
        <div className={style["main-searchbar-container"]}>
          <div className={style["searchbar-wrapper"]}>
            <input 
              className={style["searchbar"]}
              placeholder="Поиск стран"
              maxlength="50"
            />
            <button className={style["searchbar-icon-container"]}>
              {searchIcon}
            </button>
          </div>
        </div>
      </section>

      <section className={style["main-countries-container"]}>
        {countriesList.map(country => <CountryCard country={country} />)}
      </section>

      <Pagination/>
    </main>

    <Footer/>
    </>
  );
};

export default MainPage;
