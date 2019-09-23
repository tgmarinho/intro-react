## Aula 10 - Default Props & PropTypes

As defaut props e prop-types ajudam o desenvolvedor não cometer erro de passar tipos inválidos para as propriedades, ou deixar de passar algum valor padrão não obrigatório para um componente ou seu elemento.

* Default Props:
Declarando dentro de classes:
```
static deaultProps = {
  newTech:  "Digite aqui a tech..."
};
```

Declarando em funções:
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

TechItem.defaultProps = {
  tech: "Oculto"
};

export default TechItem;
```


* PropTypes:
	
	```
	yarn add prop-types
	```
Agora adicionar no código:
```
import React from "react";
import PropTypes from "prop-types";

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

TechItem.defaultProps = {
  tech: "Oculto"
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;

```

Quando um prop é obrigatório passo isRequired, quando não é obrigatório, não informo o isRequired e tenho que declarar no defaultProps, e o browser sempre vai receber um alerta se alguma regra foi descumprida e podemos ajustar no código.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula10-default-props-e-prop-types](https://github.com/tgmarinho/intro-react/tree/aula10-default-props-e-prop-types)