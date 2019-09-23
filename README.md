## Aula 07 - Estado e Imutabilidade

Vamos agora manipular a variável de estado, que declaramos na aula passada, que é a `techs` que tem um array de novas tecnologias.

Podemos percorrer o array e exibir na tela:
```
...
 render() {
    return (
      <ul>
        {this.state.techs.map(tech => (<li key={tech}>{tech}</li>))}
      </ul>
    );
  }
...
```

Todavez que fazemos um map ou iteração de listas, precisamos passar um prop `key` em cada item da lista para remover o warning,  essa `key` tem que receber uma propriedade única, geralmente um ID deve ser passado.

Toda vez que o estado da aplicação muda, o método render é executado novamente.

E para atualizar o estado, precisamos utilizar um método: `setState`:

```
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
```
E no input de texto, adicionamos:
```
 <input type="text"value={this.state.newTech} onChange={this.handleInputChange} />
```
a cada alteração no input, será executado o método handleInputChange que irá chamar o setState atualizando o valor do newTech, e com essa alteração de estado o método render(){..} é executado novamente.

```
  render() {
    return (
      <>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
      </>
    );
  }
```

Observação, coloquei a tag `<>` e `</>`que significa que é um Fragment, isto é, um fragmento de código, uma vez que adionamos uma nova tag `input` no mesmo nível da `ul` e do `h1`, os componenetes precisam um pai, elas não podem ficar "flutuando". E por isso coloamos um Fragment, poderia ser uma div, ou outro elemento que receber filhos, porém a vantagem de criar um Fragment que ele não coloca elemento visual na tela o que atrapalharia na esitilização do projeto e a manutenção do html.

Agora precisamos passar o texto que está em `newTech` para o array de `techs`.

Todo estado no React é imutável, para adicionar um novo item no techs temos que recriar o array, copiando o estado atual e adicionar um novo, para remover é a mesma coisa.

```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTech}
          onChange={this.handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
```

*O estado do React é imutável, ele não se altera, ele é recriado.*



Fim: [https://github.com/tgmarinho/intro-react/tree/aula07-estado-e-imutabilidade](https://github.com/tgmarinho/intro-react/tree/aula07-estado-e-imutabilidade)