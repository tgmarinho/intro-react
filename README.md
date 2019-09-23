
## Aula 05 - Importando Imagens

Para importar o imagens de dentro do JSX, precisamos adicionar mais um  loader no webpack.

```
yarn add file-loader -D 
```

E adicionamos mais uma nova regra para poder carregar imagens que contenham .gif, png, jpeg ou jpg de forma maíscula ou mínuscula.

```
{
  test: /.*\.(gif|png|jpe?g)$/i,
  use: {
     loader: "file-loader"
       }
}
```

E por fim importamos a imagem e colocamos na tag `img`:

```
import React from "react";
import "./App.css";

import homeoffice from "./assets/images/homeoffice.png";

function App() {
  return <img src={homeoffice} />;
}

export default App;
```

Pronto, até agora, já estamos importando, CSS e imagens! =)

Fim: [https://github.com/tgmarinho/intro-react/tree/aula05-importando-imagens](https://github.com/tgmarinho/intro-react/tree/aula05-importando-imagens)
