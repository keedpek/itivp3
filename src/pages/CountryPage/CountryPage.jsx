import React, { useEffect } from 'react';
import style from './CountryPage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import { countriesList } from '../../utils/db';
import SightComponent from '../../components/SightComponent/SightComponent';
import StoryComponent from '../../components/StoryComponent/StoryComponent';

const CountryPage = () => {
  const { id } = useParams()
  const country = countriesList.find(country => country.href === id)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
    <Header/>
    <main>
      <section className={style["country-page-main-section"]}>
        <div className={style["main-section-text-container"]}>
          <h1>
            {country.name.toUpperCase()}
          </h1>
        </div>
      </section>

      <section className={style["country-info-section"]}>
        <div className={style["country-info-container"]}>
          <h2>{country.name}</h2>
          <h3>{country.continent}</h3>
          <p>{country.description}</p>
        </div>
      </section>

      <section className={style["country-page-section"]}>
        <h2>01 / ЛУЧШИЕ ДОСТОПРИМЕЧАТЕЛЬНОСТИ И МЕСТА</h2>
        <div className={style["section-header"]}>
          <h3>Лучшие Места для Вашего Путешествия</h3>
          <label className={style["section-filter"]}>
            Фильтр
            <select className={style["section-filter-select"]}>
              <option selected>Лучшие достопримечательности</option>
              <option>Все достопримечательности</option>
            </select>
          </label>
        </div>
        <div className={style["sights-list"]}>
          {country.sights.map(sight => <SightComponent sight={sight} />)}
        </div>
        <div className={style["view-all-btn-container"]}>
          <button className={style["view-all-btn"]}>Посмотреть все достопримечательности</button>
        </div>
      </section>

      <section className={style["country-page-section"]}>
        <h2>02 / СВЕЖИЕ ИСТОРИИ</h2>
        <div className={style["section-header"]}>
          <h3>Последние Истории из Хорватии</h3>
          <a href="../" className={style["view-all-btn"]}>Посмотреть все истории</a>
        </div>
        <div className={style["stories-container"]}>
          {country.stories.map(story => <StoryComponent story={story} />)}
        </div>
        <div className={style["buttons-container"]}>
          <button className={style["nav-btn"]}>☜</button>
          <button className={style["nav-btn active-nav-btn"]}>☞</button>
        </div>
      </section>

      <section className={style["country-page-section"]}>
        <h2>03 / ДРУГИЕ ИНТЕРЕСНЫЕ МЕСТА ХОРВАТИИ</h2>
        <div className={style["section-header"]}>
          <h3>Другие Интересные Места в Хорватии</h3>
          <label className={style["section-filter"]}>
            Фильтр
            <select className={style["section-filter-select"]}>
              <option selected>Все популярные места</option>
            </select>
          </label>
        </div>
        <div className={style["sights-list"]}>
          {country.otherSights.map(sight => <SightComponent sight={sight} />)}
        </div>
        <div className={style["view-all-btn-container"]}>
          <button className={style["view-all-btn"]}>Посмотреть все места</button>
        </div>
      </section>

    </main>
    <Footer/>
    </>
  );
};

export default CountryPage;
