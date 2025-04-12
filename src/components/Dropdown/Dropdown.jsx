import React, { useState } from 'react';
import style from './Dropdown.module.css'
import { dropdownArrow } from '../../assets/svg';

const Dropdown = ({options}) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className={style["dropdown-container"]}>
    <button 
      className={style["select-btn"]}
      onClick={() => {setIsOpened(prev => !prev)}}
    >
      {dropdownArrow}
    </button>
    {isOpened && (
      <div className={style["options"]}>
        {Object.keys(options).map(key => 
          <div 
            className={style["option"]} 
            key={key}
            onClick={() => {options[key].action()}}
          >
            {options[key].option}
          </div>
        )}
      </div>
    )}
    </div>
  );
};

export default Dropdown;
