## Aula 2 - Configurando estrutura

Criar um pasta chamada `intro-react` no seu workspace, e executar o comando `yarn init -y` para criar um `package.json` na raiz do projeto.

Criar uma pasta `src` que conterá o código javascript da aplicação frontend.

Criar um arquivo `index.js` na raiz do `src` que será o ponto de entrada da aplicação frontend.

### Instalando as libs do webpack, babel, react e react-dom

Em seguinda instalar as bibliotecas como depedência de desenvolvimento: 

```
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli -D
```

São libs que funcionam a integração do[webpack](https://webpack.js.org/) com [babeljs](https://babeljs.io/) e [reactjs](https://pt-br.reactjs.org/).

Instalar as bibliotecas:

```
yarn add react react-dom
```

### Configurando o Babel

Depois criar um arquivo na raiz do projeto: `babel-config.js` para fazer as configurações do babel.

```
module.exports = {
  presets: [
    "@babel/preset-env",
    '@babel/preset-react'
  ]
}
```
`@babel/preset-env` = alterar as funcionalidades que o browser não entente para uma versão que ele entenda, por exemplo, import/export, arrow functions, classes, do javascript moderno que o browser ainda não entende. Essa lib altera para versão antiga do JS ES5.

`@babel/preset-react` = altera as funcionalidades do React que o browser não entende, por exemplo os JSX é convertido para arquivo JS.


### Configurando o Webpack

Criar na raiz do projeto um arquivo: `webpack.config.js`

`entry`: é o arquivo de entrada da aplicação.

`path.resolve(__dirname, "src", "index.js")`: Essa propriedade do `nodejs`, `resolve` as questões das barras para navegar entre diretórios, no windows é de um jeito no linux é de outro. então a função `resolve` trata isso pra gente.

`output`: é o local onde vai ser lançado o código transpirado pelo webpack, que é o que será colocado em produção e que o navegador entende. Ela recebe o path que é o local do arquivo e o filename  que é o nome do arquivo.

Podemos criar uma pasta `public` na raiz do projeto para receber o `bundle`.

```
 output: {
    path: path.resolve(__dirname, "public"),
    filename:  'bundle.js'
  }
```

Depois vamos configurar o module no webpack que armazena as regras (rules):

```
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
```

Declaramos uma regra por enquanto, para que test o arquivo, tem que ser .js ou seja um arquivo javascript na nossa aplicação, excluindo todo javascript que estiver na pasta node_modules por que elá já está com os arquivos transpilados, isso é responsabilidade do desenvolvedor da biblioteca. e Declaramos que iremos usar (use) um loader chamado babel-loader, o babel que lida com arquivos Javascript, tem outros loaders para lidar com imagem, css, etc, por enquanto vamos utilizar só esse,  e para funcionar vamos instalar como dependência de desenvolvedor:

```
yarn add babel-loader -D
```

E agora para testar a configuração, adicionamos um script no package.json para fazer o build da aplicação. Build é o ato do webpack transpilar o nosso projeto e colocar tudo no bundle.js na pasta public conforme configurandos mo webpack.config.js.

```
"scripts": {
    "build": "webpack --mode development"
  },
```

e agora só executar: 

```
yarn build
```

E o arquivo bundle.js será gerado, observe que no final temos o mesmo código escrito em javascript mais antigo que o browser suporta: 
```
var soma = function soma(a, b) {
  return a + b;
};
alert(soma(1, 3)); 
```

O código anterior, não se preocupe, mas é o que faz o import/export funcionar no navegador. Thanks webpack, babel! 

E agora vamos testar o bundle.js no navegador.

Criando o arquivo `index.html` na pasta `public`.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React JS</title>
</head>

<body>
    <h1>Hello World</h1>

    <script src="./bundle.js"></script>
</body>

</html>
```

e acessando o endereço no navegador:

```
/Users/SEU_USER_AQUI/Developer/workspace/intro-react/public/index.html
```

Recebemos um alerta com o valor da soma e é exibido um h1 com Hell World grandão.

### Live Reload

Para funcionar o live reload precisamos de uma biblioteca de desenvolvimento e algumas configurações:

```
yarn add webpack-dev-server -D
```

E no webpack.config.js, adicionamos: 

```
devServer: {
	contentBase: path.resolve(__dirname, "public")
},
```

E no package.json adicionamos mais um script: 

```
"scripts": {
   "build":  "webpack --mode development",	
   "dev": "webpack-dev-server --mode development"
  },
```

e executamos
```
yarn dev
```

E agora podemos ir no navegador e digitar na barra de endereco:

```
[http://localhost:8080/](http://localhost:8080/)
```
E vamos ter o projeto funcionando e se alteramos o código ele é atualizado e exibido na tela. Só alterar o Javascript novamente.

Um detalhe que 

```
"scripts": {
   "build":  "webpack --mode development",	
   "dev": "webpack-dev-server --mode development"
  },
```

esse --mode development gera um bundle que ainda dá para ler, se a gente muda essa propriedade para --mode production ele gera um bundle impossível de ler, deixando em uma única linha, minificado, de forma que o computador processa mais rápido, otimizando a performance.

```
"scripts": {
   "build":  "webpack --mode production",	
   "dev": "webpack-dev-server --mode development"
  },
```
 Resultado: 
 ```
 !function(e){var t={};function  r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof  Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return  Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){alert(11+3)}]);
```

Quando o código for para produção vamos enviar o bundle minificado, rodando o yarn build.


Fim: [https://github.com/tgmarinho/intro-react/tree/aula02-configurando-estrutura](https://github.com/tgmarinho/intro-react/tree/aula02-configurando-estrutura)