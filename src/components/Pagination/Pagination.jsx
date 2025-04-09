import React from 'react';
import style from './Pagination.module.css'

const Pagination = () => {
  return (
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
  );
};

export default Pagination;
