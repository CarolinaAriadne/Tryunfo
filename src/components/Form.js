import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="a">
            Nome da Carta
            <input type="text" data-testid="name-input" id="a" value="a" />
          </label>
        </div>
        <div>
          <label htmlFor="b">
            Descrição da Carta
            <textarea id="b" data-testid="description-input" />
          </label>
        </div>
        <div>
          <label htmlFor="c">
            Não sei o que vai aqui
            <input type="number" data-testid="attr1-input" id="c" />
          </label>
        </div>
        <div>
          <label htmlFor="d">
            Não sei o que vai aqui 2
            <input type="number" data-testid="attr2-input" id="d" />
          </label>
        </div>
        <div>
          <label htmlFor="e">
            Não sei o que vai aqui 3
            <input type="number" data-testid="attr3-input" id="e" />
          </label>
        </div>
        <div>
          <label htmlFor="f">
            Não sei o que vai aqui 4
            <input type="text" data-testid="image-input" id="f" />
          </label>
        </div>
        <select data-testid="rare-input">
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <div>
          <label htmlFor="g">
            Não sei o que vai aqui 5
            <input type="checkbox" data-testid="trunfo-input" id="f" />
          </label>
        </div>
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
