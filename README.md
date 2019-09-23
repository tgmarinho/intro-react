## Aula 4 - Importando CSS

Para importar o CSS de dentro do JSX, precisamos adicionar mais dois novos loaders no webpack.

```
yarn add style-loader css-loader -D
```

Adicionaremos mais uma regra no webpack.config.js:

```
{
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
}
```

* Style Loader: Serve para importar arquivos css,  ele pega o arquivo css, por exemplo App.css, e o conteúdo que está no App.css, para para dentro de um `<style>` no html.

* CSS Loader: server para importar outros arquivos que estão no CSS, por exemplo um `backgroud: url('../imagem/bonita.jpg')`,  ele pega os recurss que estão declarados no CSS.

Agora criamos um arquivo css no projeto: `src/App.css`:

```
body {
  background: #7159c1;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}
```

E por fim importamos ele no App.js:

```
import React from "react";
import "./App.css";

function App(params) {
  return <h1>Hello Thiago Marinho</h1>;
}

export default App;
```

E agora só rodar o projeto: yarn dev e conferir  o resultado, deve aparecer uma tela roxa com texto em branco.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula04-importando-css](https://github.com/tgmarinho/intro-react/tree/aula04-importando-css)