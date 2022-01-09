import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.functionHandle = this.functionHandle.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  functionHandle({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      // como se fosse ["cardName"]
      [target.name]: value,

    }, () => {
      const {
        cardName,
        cardDescription,
        cardImage,
        cardRare,
        cardAttr1,
        cardAttr2,
        cardAttr3,
      } = this.state;

      const verificaPreenchido = cardName && cardDescription && cardImage && cardRare;
      const limiteAtributo = 210;
      const valorAtributo = 90;
      const somaAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
        <= limiteAtributo;
      const atributo = Number(cardAttr1) <= valorAtributo && Number(cardAttr2)
        <= valorAtributo && Number(cardAttr3) <= valorAtributo;
      const maiorQueZero = Number(cardAttr1) >= 0 && Number(cardAttr2)
        >= 0 && Number(cardAttr3) >= 0;
      const tudoCerto = verificaPreenchido && somaAttr && atributo && maiorQueZero;
      this.setState({
        // isSaveButtonDisabled: tudoCerto ? false : true,
        isSaveButtonDisabled: !tudoCerto,
      });
    });
  }

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
      // hasTrunfo,
      isSaveButtonDisabled,
    } = this.state; // desustruturando estados

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.functionHandle }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // hasTrunfo={hasTrunfo}
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ () => {

          } }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </>
    );
  }
}

export default App;

// REQUISITO 4:
// Form e Card, componentes irmãos: definindo props destes, quando ambos são chamados no elemento pai App. O estado inicial destas props, está definido em constructor.
// // definindo estado inicial das props no constructor. OBS: o cardTrunfo começa como false, porque  só vai ser true, quando existir uma carta trunfo.
// isSaveButtonDisabled:  botão de salvar começa com true, ou seja, tem que estar desabilitado (disabled) de fato. Só estará habilitado, e desabilitado se tornará então false, quando todos campos estiverem preenchidos (campos preenchidos = botão salvar habilitado (false))
// sendo assim, Form e Card compartilham o mesmo estado, tendo em vista que suas props possuem um mesmo valor inicial de estado, valor este definido no componente pai App. Quando o estado de um componente (form) é alterado, por exemplo porque o usuário digitou algo, o estado de outro (card) também é alterado trazendo o estado atual (algo digitado)

//  functionHandle({ target }) {
// const value = target.type === 'checkbox' ? target.checked : target.value;
// this.setState({
//   // como se fosse ["cardName"]
//   [target.name]: value,
// >>  chamo minha função e passo o target desustruturado (target: elemento que recebeu o evento onChange). Se meu elemento que recebeu o evento, for to tipo checkbox, meu elemento então terá o atributo checked (só o 'chequizinho'), se não for do tipo checkbox , por ex se for do tipo text ou number etc, ele receberá o valor efetivamente digitado pelo usuário - estado alterado para ser o valor inserido pelo usuário.
// >> atualizando valor do estado em this.setState >> meu target.name (em Form, as tags recebem name com o valor das props). Ou seja, função genérica : meu elemento que recebeu o evento onChange, que possui o name (name que tem como valor, o nome da prop -- todas tags possuem o name em Form), vai passar a ter o estado atual igual a value, ou seja, o estado atual será a mudança realizada pelo usuário (a digitação da palavra por ex no input)

// REQUISITO 5:
// o setState é assíncrono - assim colocamos a verificação das condições do requisito 5, após o setState, pois assim garantimos que o estado está atualizado e depois disso, que a verificação é realizada. Descontrução do estado atualizado em razão do lint. const verificaPreenchido : guardando na constante os inputs já com o estado atualizado (digitado pelo usuário),// const somaAttr: precisa do Number, pois o estado inicial dos números está como string '0'. As cartas possuem atributos, a soma dos atributos de uma carta, não pode ser maior que 210 (ou seja por ser menor ou igual a 210). / const atributo: cada carta possui 3 atributos, sendo que cada atributo pode ter no máximo 90 pontos (menor ou igual a 90)./ maiorQueZero: definindo que os valores  dos atributos devem ser maior ou igual a zero, desta forma não podendo receber número negativo.
//  const tudoCerto = verificaPreenchido && somaAttr && atributo && maiorQueZero: a const recebe as outras consts com seus valores, ou seja, recebe o estado atualizado,isto é, inputs preenchidos, condições satisfeitas etc.
// conclusão: isSaveButtonDisabled: tudoCerto ? false : true (forma mais clara, mas lint não aceita) /  isSaveButtonDisabled: !tudoCerto -- O botão de salvar que começa como true (ou seja, o disabled é true, tem que estar desabilitado), se const tudoCerto for true, se o usuário fez tudo que precisa ser feito, o botão de salvar então passa a ser false (OU SEJA FICA HABILITADO PARA "APERTAR"), se const tudoCerto for false (o usuário deixou de fazer algo que precisa, preencher campo, condição não satisfeita), então o estado do botão permanece true (ou seja, disabled, desabilitado).
