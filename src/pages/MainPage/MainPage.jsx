import React from 'react';
import style from './MainPage.module.css'
import Header from '../../components/Header/Header';
import CountryCard from '../../components/CountryCard/CountryCard';
import { countriesList } from '../../utils/db';
import { searchIcon } from '../../assets/svg';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
  return (
    <main>
      <Header/>
      
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

      <div className={style["pagination"]}>
        <button className={style["prev"]}>&laquo;</button>
        <button className={style["active"]}>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <span>...</span>
        <button>10</button>
        <button className={style["next"]}>&raquo;</button>
      </div>

      <Footer/>
    </main>
  );
};

export default MainPage;
