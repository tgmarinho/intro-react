
## Removendo itens do estado

Para remover itens do estado, precisamos recriar um novo estado, para remover items do array, precisamos devolver um novo array sem o elemento que será deletado.

```
handleDelete  =  tech  => {
	this.setState({ techs:  this.state.techs.filter(t  => t !== tech) });
};
```

Dessa forma recebemos como parametro o id o elemento a ser deletado e percorro todos os elementos filtrando todos que não tem esse id, com isso o filter irá recriar um novo array para dentro de techs apenas com os itens que não tem no id informado.

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

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.newTech}</h1>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remover
              </button>
            </li>
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
*Conceito de imutabilidade é justamente não atribuir diretamente um valor a propriedade de estado, mas sim recriar um novo valor para o estado, considerando o estado atual.*

Fim: [https://github.com/tgmarinho/intro-react/tree/aula08-removendo-itens-do-estado](https://github.com/tgmarinho/intro-react/tree/aula08-removendo-itens-do-estado)