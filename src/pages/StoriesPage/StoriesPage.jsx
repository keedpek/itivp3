import React from 'react';
import style from './StoriesPage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Pagination from '../../components/Pagination/Pagination';
import { storiesList } from '../../utils/db';
import StoryComponent from '../../components/StoryComponent/StoryComponent';

const StoriesPage = () => {
  return (
    <>
      <Header/>

      <main>
        <section className={style["stories-page-main-section"]}>
          <div className={style["main-section-text-container"]}>
            <h2>
              Истории из путешествий по всему миру
            </h2>
          </div>
        </section>

        <section className={style["stories-section"]}>
          <div className={style["section-header"]}>
            <div>
              <h3>Лучшие истории</h3>
              <span>Посмотрите актуальные истории</span>
            </div>
            <button className={style["view-all-btn"]}>Смотреть все истории</button>
          </div>
          <div className={style["stories-container"]}>
            {storiesList.map(story => <StoryComponent story={story} />)}
          </div>
        </section>

        <Pagination />
      </main>

      <Footer/>
    </>
  );
};

export default StoriesPage;
