import React from 'react';
import style from './StoryComponent.module.css'

const StoryComponent = ({story}) => {
  return (
    <div className={style["story-component"]}>
      <img src={story.photo} alt={story.title}/>
      <div className={style["meta"]}>
        <h4>{story.place}</h4>
        <span>{story.time}</span>
      </div>
      <h3 className={style["story-title"]}>{story.title}</h3>
      <p className={style["short-story"]}>{story.short}</p>
      <a className={style["full-post-link"]} href="">Читать весь пост</a>
    </div>
  );
};

export default StoryComponent;
