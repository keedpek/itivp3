import React from 'react';
import style from './CountryCard.module.css'
import { useNavigate } from 'react-router-dom';
import { COUNTRY_ROUTE } from '../../utils/consts';

const CountryCard = ({country}) => {
  const navigate = useNavigate()
  
  return (
    <div 
      className={style["country-component"]}
      onClick={() => {navigate(COUNTRY_ROUTE + `/${country.href}`)}}
    >
      <img src={country.photo} alt={country.name}/>
      <h5>{country.continent}</h5>
      <h4>{country.name}</h4>
    </div>
  );
};

export default CountryCard;
