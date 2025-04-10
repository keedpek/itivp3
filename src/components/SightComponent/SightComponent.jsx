import React from 'react';
import style from './SightComponent.module.css'

const SightComponent = ({sight}) => {
  return (
    <div className={style["sight-component"]}>
      <figure>
        <img src={sight.photo} alt={sight.name}/>
        <figcaption>{sight.name}</figcaption>
      </figure>
    </div>
  );
};

export default SightComponent;
