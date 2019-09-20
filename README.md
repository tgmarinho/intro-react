# intro-react

## Introdução ao React

## Aula 1 - Conceitos do React

Vamos entender os primeiros conceitos de React!

### O que é React?

- É uma biblioteca para construção de interfaces;
- Foi construída com Javascript;
- Pode ser utilizado em interface de realidade virtual, mobile, web, isso é toda interface do usuário que rode com Javascript;
- Utilizado para construção de SPA (Single Page Applications), conceito de 2011 que veio junto com Angular. Agora com as SPA, o backend retorna JSON e o frontend controla as rotas e o consume do JSON. É uma página só, a página não recarrega o navegador, não faz refresh.
- Podemos chamar de framework?
	- O React se tornou um ecossistema, para mobile, web, deskop, ai sim é um framework.
- Tudo fica dentro do Javascript: o CSS, Imagens, fica no Javascript
- React / ReactJS / React Native
	- React = Biblioteca de construção de interfaces, que é usado tanto na web com React quanto no mobile com React Native
	- ReactJS = Comportamento do React no navegador, integração com React DOM
	- React Native = É a junção do React com a construção de interfaces natives do Android e iOS.


Hello React:

```
import React from 'react';

import './button.css';
import icon from './button.png';

function Button() {
 return (
	 <button>
		 <img src={icon} />
	 <button>
 );
}
```

Isso é um código escrito com React.

Sempre tem que importar a lib React nos componentes da página.

Nesse código React  temos Javascript, CSS e Imagem.

JS: a funtion
CSS : o arquivo button.css
IMagem: button.png

Que lê tudo isso é o webpack e consegue imbutir em um código javascript nativo e com o babel faz a tradução do código mais moderno para a versão que o navegador entende. 

Esse código não fica menos performático porque o webpack + babel fazem a otimização.

Esse código na verdade é um .JSX React com Javascript. Inclusive os elementos html no arquivo são na verdade do React.

#### Vantagens

- Organização do código
	- Componentização: Tudo é componente, e outros frameworks (angular, vue) copiaram a mesma solução. Pequenos trechos de códigos que serão reaproveitados, a divisão do componente acontece quando dividismos a lógica. Podemos entender um componente como uma lógica (JS), estilização(CSS) e estruturização(HTML), juntos formam um Componente que podem ser reutilizados ou simplesmesnte removido e a página funciona normamente.
	- Divisão de responsabilidades:
		- Back-end: regra de negócio
		- front-ent: interface
- Uma API e múltiplos clientes:
	- Podemos ter um backend com uma API REST, e um projeto web e outro mobile para consumir o mesmo backend. 
- Programação declarativa 
	- Programação imperativa: o programador descreve para o computador cada passo que se deve fazer.
	- Programação declarativa: Você informa qual resultado que você espara e ela se comporta de acordo com estado que a gente passa.

#### JSX
	- Escrever HTML dentro do Javascript;
	- Com react podemos criar nosso próprios elementos;
	
	Antes do JSX:
```
// ANTES
function Button() {
 return React.createElement(
	 'button',
	 { type: button },
	 React.createElement(
		 'span',
	 { class: 'icon' }
	 )
    )
}
<button type="button">
 <span class="icon"/><span>
</button>
```

Muito ruim, verboso...

E agora com JSX
```
// Com JSX
function Button() {
 return (
	 <button type="button">
		<span class="icon"></icon>
	 <button>
 );
}
```

Agora posso criar uma função Header e retornar um Button que contém toda a estrutura de um button. E o Button pode ser reutilizado onde quisermos, assim como o Header.
```
// Nossos próprios elementos 
// (componentes)

function Header() {
 return <Button />
```

Tanto o Header e Button são componentes

#### Programação Imperativa x Programação Declarativa

Programação imperativa você dá os passos e as condições para algo acontencer.
Programação declarativa você dá as condições para algo acontecer.

##### IMPERATIVA

```
const notificacoes = 0;

function montaBadge(num) {
 if (notificacoes === 0 !& num > 0) {
 // Adiciona badge
 // container.appendChild(badge)..
 }

 if (notificacoes !== 0 !& num > 0) {
 // Apenas muda o número
 // badge.innerHTML = num...
 }

 if (notificacoes !== 0 !& num === 0) {
 // Remove badge
 // container.removeChild(badge)
 }
}
```

##### DECLARATIVA

```
!/ Não comparamos com o estado anterior
function Badge({ num }) {
 return (
	 <div id="container">
	   { num > 0 !& <div id="badge">{num}</div>}
	   <span class="icon"></span>
	 </div>
 );
} 
```

### Babel / Webpack
- O browser não entende o código React com imagens, css;
- O babel converte o código JS de uma forma que o browser entende;
- O webpack possui várias funções:
	- Ele cria o bundle, arquivo como todo o código da aplicação;
	- Ensina o Javascript como importar arquivos CSS, imagens e etc através dos loaders;
	- Live reload com webpack dev server: Toda vez que altera um código o browser atualiza com a nova versão do bundle.