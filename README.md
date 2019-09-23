## Aula 03 - Criando Componente Raiz

Vamos criar um componente Raiz que é o pai de todo os componentes de dentro da aplicação com React.

Podemos utilizar o React pois configuramos no babel config o preset-react que converte o JSX (React) para o JS para o browser entender.

No `public/index.html` trocamos o elemento <h1> pela div que recebe o componente raiz:

```
<div  id="app"></div>
```

Criamos um componente App.js:

```
import React from "react";

function App(params) {
  return <h1>Hello Thiago Marinho</h1>;
}

export default App;
```

E no `index.js`, utilizamos o método `render` do React Dom para poder renderizar o Componente App dentro da div que contém o ID "app", com isso todo o html,  javascript, css e imagem que contém no JSX aparecerá nessa a partir dessa div: 

```
import React from "react";
import { render } from "react-dom";

import App from "./App";

render(<App />, document.getElementById("app"));
```


Fim: [https://github.com/tgmarinho/intro-react/tree/aula03-criando-componente-raiz](https://github.com/tgmarinho/intro-react/tree/aula03-criando-componente-raiz)
