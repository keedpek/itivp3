import React from 'react';
import style from './AboutMePage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import photo1 from '../../assets/images/aboutMePhotos/about-me1.webp'
import photo2 from '../../assets/images/aboutMePhotos/about-me2.webp'
import photo3 from '../../assets/images/aboutMePhotos/about-me3.webp'
import photo4 from '../../assets/images/aboutMePhotos/about-me4.webp'
import { facebookIcon, instagramIcon, linkedInIcon, twitterIcon } from '../../assets/svg';

const AboutMePage = () => {
  return (
    <>
    <Header/>

    <main>
      <section className={style["about-me-main-section"]}>
        <div className={style["main-section-text-container"]}>
          <h1>
            О себе
          </h1>
        </div>
      </section>

      <section className={style["info"]}>
        <article className={style["text"]}>
          <h2>Меня зовут Дэвид и я обожаю путешествовать!</h2>
          <p>Меня зовут Дэвид Лейтер, и это мой блог о путешествиях.</p>
          <p>Я американец, который уже 9 лет постоянно путешествует по миру. В настоящее время я обычно нахожусь на Бали, Индонезия, со своей женой Интан.</p>
          <p>Впервые я влюбился в путешествия во время самостоятельной поездки по Исландии в 2016 году. У меня был небольшой бюджет, поэтому я спал на заднем сиденье арендованного автомобиля в течение 1 месяца, пока проезжал 7000 километров по стране, снимая все живописные места Исландии.</p>
          <p>Это не всегда было легко, но за прошедшие годы мне посчастливилось получить несколько удивительных впечатлений, в том числе:</p>
          <ul type="circle">
            <li>Совершить пеший поход в базовый лагерь Эвереста в Гималаях,</li>
            <li>Совершить восхождение на извергающийся вулкан в Гватемале,</li>
            <li>Поход по ледникам в Патагонии и посещение водопада Игуасу в Аргентине,</li>
            <li>Встреча с дикими комодскими варанами и орангутангами в Индонезии,</li>
            <li>Ночевка в домиках на деревьях на Бали и наблюдение голубого пламени на Яве,</li>
            <li>Обед из тарантулов и скорпионов в Камбодже,</li>
            <li>И посещение некоторых неподвластных времени мировых памятников, таких как Тадж-Махал, Тикаль, Баган, Мачу-Пикчу, Собор Святой Софии, Ангкор-Ват, Петра и замок Химеджи.</li>
          </ul>
          <p>В 2018 году я побывал в 24 странах за один год, что пока является моим личным рекордом! Я делал это при довольно скромном бюджете и редко тратил больше 30 долларов в день на поездки, включая проживание и питание.</p>
          <p>Надеюсь, мой блог о путешествиях поможет и вдохновит вас на ваши собственные путешествия!</p>
        </article>
        <aside className={style["photos"]}>
          <img src={photo1} className={style["item1"]} alt='myPhotos'/>
          <div className={style["small-images"]}>
            <img src={photo2} className={style["item2"]} alt='myPhotos'/>
            <img src={photo3} className={style["item3"]} alt='myPhotos'/>
          </div>
          <img src={photo4} className={style["item4"]} alt='myPhotos'/>
        </aside>
      </section>

      <section className={style["socials"]}>
        <h3>МОИ СОЦ. СЕТИ:</h3>
        <div className={style["social"]}> 
          {facebookIcon}
          <a href="https://www.facebook.com/TheWorldTravelGuy">Facebook</a>  
        </div>
        <div className={style["social"]}> 
          {linkedInIcon}
          <a href="https://www.linkedin.com/in/chaharnishant11/">LinkedIn</a>  
        </div>
        <div className={style["social"]}> 
          {twitterIcon}         
          <a href="https://x.com/wholewrldcitizn">Twitter</a>  
        </div>
        <div className={style["social"]}> 
          {instagramIcon}
          <a href="https://www.instagram.com/theworldtravelguy/">Instagram</a>  
        </div>
      </section>
    </main>

    <Footer/>
    </>
  );
};

export default AboutMePage;
