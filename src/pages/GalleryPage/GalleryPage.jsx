import React from 'react';
import style from './GalleryPage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import photo1 from '../../assets/images/croatia/croatiaPage.webp'
import photo2 from '../../assets/images/croatia/Plitvice.webp'
import photo3 from '../../assets/images/stories/a-solo-trip-across-europe.webp'
import photo4 from '../../assets/images/croatia/rijeka.webp'
import photo5 from '../../assets/images/croatia/split.webp'
import photo6 from '../../assets/images/croatia/porec.webp'
import video from '../../assets/videos/mixkit-mime-in-front-of-the-eiffel-tower.mp4'

const GalleryPage = () => {
  return (
    <>
    <Header/>

    <main>
      <section className={style["gallery-main-section"]}>
        <div className={style["main-section-text-container"]}>
          <h1>
            Моя галерея
          </h1>
        </div>
      </section>

      <section className={style["gallery-container"]}>
        <img src={photo1} className={style["gallery-img"]} alt='photo1'/>
        <img src={photo2} className={style["gallery-img"]} alt='photo2'/>
        <img src={photo3} className={style["gallery-img"]} alt='photo3'/>
        <video src={video} controls></video>
        <img src={photo4} className={style["gallery-img"]} alt='photo4'/>
        <img src={photo5} className={style["gallery-img"]} alt='photo5'/>
        <img src={photo6} className={style["gallery-img"]} alt='photo6'/>
      </section>
    </main>

    <Footer/>
    </>
  );
};

export default GalleryPage;
