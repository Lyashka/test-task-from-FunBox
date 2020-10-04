import React, { Component } from "react";
import SignatureOfCard from '../signatureOfCard';
import miceConjugation from '../../common/miceСonjugation.js';
import './petFoodCard.scss';

export default class PetFoodCard extends Component {
  constructor(props) {
    super(props);

    this.isDisable = !this.props.presence;
    this.stuffing = this.props.stuffing;
    this.portions = this.props.portions;
    this.present = miceConjugation(this.props.present);
    this.volume = this.props.volume;
    this.description = this.props.description;

    this.state = {
      status: 'default',
    }

    this.handlerChangeStatus = this.handlerChangeStatus.bind(this);
  }

  handlerChangeStatus() {
    const newStatus = this.state.status === 'default' ? 'selected' : 'default';
    this.setState({
      status: newStatus,
    })
  }

  render() {
    let feedCardStatus = 'feed-selection-button';
    switch(true) {
      case this.isDisable:
        feedCardStatus += ' feed-selection-button_disable';
        break;
      case this.state.status === 'selected':
        feedCardStatus += ' feed-selection-button_selected';
        break;
      default:
        feedCardStatus += ' feed-selection-button_default';
        break;
    }

    return (
      <>
      <button
        className={feedCardStatus}
        onClick={this.handlerChangeStatus}
        disabled={this.isDisable}>
        <article className="pet-food-card">
          <header className="pet-food-card__header header">
            <div className="header__angle"></div>
            <h2 className="header__text header__text_default">Сказочное заморское яство</h2>
            <h2 className="header__text header__text_selected-hover">Котэ не одобряет?</h2>
          </header>
          <main className="pet-food-card__main">
            <p className="pet-food-card__name">Нямушка</p>
            <p className="pet-food-card__stuffing">{`c ${this.stuffing}`}</p>
            <p className="pet-food-card__portions">{`${this.portions} `}порций</p>
            <p className="pet-food-card__present">{`${this.present} `}в подарок</p>
            <div className="pet-food-card__container-volume">
              <p className="pet-food-card__volume">{this.volume}</p>
              <p className="pet-food-card__unit">кг</p>
            </div>
          </main>
        </article>
      </button>
      <SignatureOfCard
        isDisable={this.isDisable}
        cardStatus={this.state.status}
        stuffing={this.stuffing}
        description={this.description}
        changeCardStatus={this.handlerChangeStatus}/>
      </>
    )
  }
}
