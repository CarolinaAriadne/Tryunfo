import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <div>
          <label htmlFor="a">
            Nome da Carta
            <input
              type="text"
              data-testid="name-input"
              id="a"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="b">
            Descrição da Carta
            <textarea
              id="b"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="c">
            Não sei o que vai aqui
            <input
              type="number"
              data-testid="attr1-input"
              id="c"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="d">
            Não sei o que vai aqui 2
            <input
              type="number"
              data-testid="attr2-input"
              id="d"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="e">
            Não sei o que vai aqui 3
            <input
              type="number"
              data-testid="attr3-input"
              id="e"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <div>
          <label htmlFor="f">
            Não sei o que vai aqui 4
            <input
              type="text"
              data-testid="image-input"
              id="f"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <select
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <div>
          <label htmlFor="g">
            Não sei o que vai aqui 5
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="f"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
        </div>
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSaveButtonDisabled: PropTypes.func.isRequired,
};

export default Form;
