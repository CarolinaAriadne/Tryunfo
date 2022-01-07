import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,

    } = this.props;
    return (
      <>
        <p data-testid="name-card" value={ cardName }>Nome da carta</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card" value={ cardDescription }>Descrição da carta</p>
        <p data-testid="attr1-card" value={ cardAttr1 }>12</p>
        <p data-testid="attr2-card" value={ cardAttr2 }>34</p>
        <p data-testid="attr3-card" value={ cardAttr3 }>56</p>
        <p data-testid="rare-card" value={ cardRare }>raro</p>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;

// {cardTrunfo && <p data-testid="trunfo-card">Super trunfo</p>} - quando cardTrunfo for true, o texto da tag p será exibido.
