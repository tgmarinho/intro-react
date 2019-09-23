## Aula 06 - Class Components

Com React podemos escrever componentes utilizando classes, e é útil para poder definir estados e e adicionar métodos de gerencimento de ciclo de vida que veremos mais pra frente.

Criamos uma pasta `src/components` e criamos o arquivo `TechList.js` dentro da nova pasta:
```
import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.JS", "ReactJS", "React Native"]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>ReactJS</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
```

E utilizamos o novo componente no App.js:

```
import React from "react";
import "./App.css";

import TechList from "./components/TechList";

function App() {
  return <TechList />;
}

export default App;
```
Quando executar o yarn dev para rodar o projeto e abrir o navegador, você verá um erro no console, pedindo para adicionar um plugin no babel, isso ocorre porque no babel não tem suporte a essa nova sintaxe de adicionar o `state` dentro da classe se definir um `constructor`.

Precisamos adicinar um plugin do babel para poder adicionar componentes nas classes com uma sintaxe mais simplificada do React.

```
yarn add @babel/plugin-proposal-class-properties -D
```

E adiciono no `babel.config.js`:

```
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
```

E agora executano o projeto com yarn dev ele deve funcionar perfeitamente.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula06-class-components](https://github.com/tgmarinho/intro-react/tree/aula06-class-components)