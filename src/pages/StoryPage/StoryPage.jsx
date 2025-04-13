import React, { useEffect, useState } from 'react';
import style from './StoryPage.module.css'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import { storiesList } from '../../utils/db';
import Dropdown from '../../components/Dropdown/Dropdown';

const StoryPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [story, setStory] = useState({})
  const [isFavorite, setIsFavorite] = useState(false)
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  
  useEffect(() => {
    const fetchedStory = storiesList.find(story => story.href === id)
    if(fetchedStory) {
      setStory(fetchedStory)
      setIsFavorite(favorites.includes(fetchedStory.href))
    } else {
      navigate("/404")
    }
  }, [id])

  
  const addToFavorites = () => {
    if (!favorites.includes(story.href)) {
      favorites.push(story.href);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true)
      alert("История добавлена в избранное!");
    } else {
      alert("История уже в избранном!");
    }
  };

  const removeFromFavorites = () => {
    if (favorites.includes(story.href)) {
      console.log(story.href);
      console.log(favorites);
      favorites = favorites.filter(favStory => favStory !== story.href);
      console.log(favorites);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(false)
      alert("История удалена из избранного!");
    } else {
      alert("Истории нет в избранном!");
    }
  };

  const copyLinkToClipboard = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert("Ссылка скопирована в буфер обмена!");
    });
  };

  const openMap = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      story.place
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const dropdownOptions = {
    favorites: {
      option: isFavorite ? "Убрать из избранного" : "Добавить в избранное",
      action: isFavorite ? removeFromFavorites : addToFavorites,
    }, 
    copyLinkToClipboard:  {
      option: "Скопировать ссылку на историю",
      action: copyLinkToClipboard
    },
    openMap:  {
      option: "Открыть на карте",
      action: openMap
    },
  }

  return (
    <>
    <Header/>
    <main>
      <section className={style["storiey-page-main-section"]}>
        <img src={story.photo} className={style["story-image"]} alt='storyImg'/>
        <div className={style["story-title"]}>
          <h2>
            {story.title}
          </h2>
        </div>
      </section>

      <article className={style["story"]}>
        <div className={style["meta"]}>
          <h4>{story.place}</h4>
          <div className={style["right-side"]}>
            <span>{story.time}</span>
            <Dropdown options={dropdownOptions} />
          </div>
        </div>
        <h3>Где море встречается с историей</h3>
        <p>Хорватия — страна, которая кажется вырванной из страниц фэнтезийного романа. Здесь каждый городок хранит свою историю, а природа настолько красива, что порой трудно поверить, что это не декорация для какого-нибудь фильма. Мое путешествие по этой удивительной стране началось с ощущения, будто я попал в другую эпоху.</p>
        <h4>Дубровник: жемчужина Адриатики</h4>
        <p>Первым пунктом нашего маршрута стал Дубровник — город, который многие знают по сериалу "Игра престолов". Уже при подъезде к нему ты видишь величественные стены, окружённые голубыми водами Адриатического моря. Старый город поражает своим ухоженным видом: белые каменные дома, мощёные улицы и маленькие площади, где время словно застыло. Я прогулялся по знаменитым стенам города, откуда открывается захватывающий вид на море и крыши домов. Здесь можно представить себя средневековым рыцарем или, если вы поклонник "Игры престолов", то королём Робертом Баратеоном. Особенно запомнилась прогулка по набережной Лапад, где можно было просто сидеть и наблюдать за закатом, который окрашивал небо в розовые и золотистые тона.</p>
        <h4>Загреб: сердце страны</h4>
        <p>Следующим этапом стало путешествие в столицу Хорватии — Загреб. Этот город совершенно отличается от приморских курортов. Он больше напоминает классический европейский город с богатой историей и культурой. В Верхнем городе (Gornji Grad) сохранились старинные здания, церкви и замки. Мы обязательно поднялись на башню Lotrščak, чтобы полюбоваться видом на весь город. Одним из самых необычных мест в Загребе является Музей разбитых отношений. Это уникальное место, где собраны истории и предметы, связанные с расставаниями людей со всего мира. Хотя тема может показаться грустной, экспозиция подана так, что вызывает скорее улыбку и задумчивость.</p>
        <h4>Волшебство природы</h4>
        <p>Вечерами мы сидели в уютных ресторанчиках, дегустируя местные блюда, такие как чернила каракатицы или осьминоги, приготовленные на гриле. Попробуйте также местное вино — оно прекрасно дополняет вкус морепродуктов.</p>
        <h4>Заключение</h4>
        <p>Хорватия — это страна контрастов: от древних городов до нетронутых природных заповедников, от шумных туристических мест до спокойных рыбацких деревушек. Она предлагает что-то для каждого путешественника, будь то любитель активного отдыха, ценитель культуры или просто человек, ищущий умиротворения. Если вы ещё не были в Хорватии, обязательно добавьте её в свой список желаний. Я уверен, что эта страна оставит след в вашем сердце точно так же, как она оставила его в моём.</p>
        <h4>Карта маршрута</h4>
        <div id="map"></div>
        <div className={style["comments"]}>
          <h2>3 комментария</h2>
          <input
            className={style["comment-input"]}
            placeholder="Оставте комментарий"
            type="text"
            maxlength="255"
          />
          <div className={style["comment-btns"]}>
            <button className={`${style["comment-btn"]} ${style["cansel"]}`}>Отменить</button>
            <button className={`${style["comment-btn"]} ${style["leave"]}`}>Оставить комментарий</button>
          </div>
          <div className={style["comments-section"]}>
            <div className={style["comment-component"]}>
              <div className={style["comment-heading"]}>
                <h3 className={style["nickname"]}>rodlox483</h3>
                <span className={style["date"]}>3 дня назад</span>
              </div>
              <p className={style["comment"]}>Оч красиво 😍</p>
            </div>
            <div className={style["comment-component"]}>
              <div className={style["comment-heading"]}>
                <h3 className={style["nickname"]}>ВикторХарченко-и7ж</h3>
                <span className={style["date"]}>1 месяц назад</span>
              </div>
              <p className={style["comment"]}>Хорватия супер часто ездим туда</p>
            </div>
            <div className={style["comment-component"]}>
              <div className={style["comment-heading"]}>
                <h3 className={style["nickname"]}>Sussi861</h3>
                <span className={style["date"]}>3 месяца назад</span>
              </div>
              <p className={style["comment"]}>Даже бы с такой картой я бы яхту не взела бы. С мошиной в этой стране увидешь то что с яхторй не увидешь. Эту страну надо на машине смотреть. Очень красивая страна где точно нужно побывать</p>
            </div>
          </div>
        </div>
      </article>
    </main>
    <Footer/>
    </>
  );
};

export default StoryPage;
