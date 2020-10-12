import React, {Component} from 'react';
import { typesFeed } from '../../localStorage.js';
import PetFoodCard from '../petFoodCard';
import './shopPage.scss';

export default class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [...typesFeed],
    }
  }

  render() {
    return (
      <div className="shop-page">
      <header className="shop-page__title title">
        <h3 className="title__text">Ты сегодня покормил кота?</h3>
      </header>
      <ul className="shop-page__cards cards">
        {this.state.cards.map((card) => (
          <li key={card.id} className="cards__item">
            <PetFoodCard
            presence={card.presence}
            stuffing={card.stuffing}
            portions={card.portions}
            present={card.present}
            weight={card.weight}
            description={card.description}
            />
          </li>
        ))}
      </ul>
    </div>
    )
  }
}
