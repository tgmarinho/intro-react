## Aula 09 - Propriedades do React

Vamos ver o conceito mais importante do React, que são as props, props ou propriedades é tudo que passamos para dentro de um componente.

Legal falar que um Componente em React é uma função, e que essa função pode ou não receber parâmetros, e esses parametros no componente são as propriedades.

Criamos um novo componente: `src/components/TechItem`:
```
import React from "react";

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

export default TechItem;
```

E utilizamos o novo componente no `TechList`:

```
import React, { Component } from "react";

import TechItem from "./TechItem";

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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
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

Algumas observações: O método de deleção de items tem que ficar na classe onde está o estado, e o que podemos fazer é passar como referência a função para o TechItem só chamar.

A Key sempre fica no componente pai, raiz da iteração.


Fim: [https://github.com/tgmarinho/intro-react/tree/aula09-propriedades-do-react](https://github.com/tgmarinho/intro-react/tree/aula09-propriedades-do-react)