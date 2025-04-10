import React from 'react';
import style from './StoryComponent.module.css'
import { Link } from 'react-router-dom';

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
      <Link to={`/stories/${story.href}`}>Читать весь пост</Link>
    </div>
  );
};

export default StoryComponent;
