import React from 'react';
import PetFoodCard from '../petFoodCard';
import './shopPage.scss';

export default function ShopPage(props) {
  return (
    <div className="shop-page">
      <header className="title">
        <h3 className="title__text">Ты сегодня покормил кота?</h3>
      </header>
      <ul className="cards">
        <li><PetFoodCard /></li>
        <li><PetFoodCard /></li>
        <li><PetFoodCard /></li>
      </ul>
    </div>
  )
}
