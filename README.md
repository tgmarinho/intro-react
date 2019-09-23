## Aula 11 - Ciclo de Vida do Componente

O react tem vários ciclos de vida.

Vamos detalhar os três principais mais utilizados aqui:

```
componentDidMount() { }
```
É executado assim que o componente aparece na tela, é recomendo utilizar esse método para buscar recursos de uma API externa para preencher o estado e exibir na tela.

```
componentDidUpdate(prevProps, prevState) {
// this.props, this.state
}
```

É executado sempre que houver alterações nas props ou estado, podemos acessar as props e state antigos.


```
componentWillUnmount() { }
```

É executado quando o componente deixa de existir.


Vamos ver na prática, precisamos salvar no localStorage o array de tecnologia, toda vez que o usuário adicionar ou remover uma tech. E o método que faz updade toda vez que um estado altera é o `componentDidUpdate`, ou seja, o componete fez uma alteração.

```
// Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("@techs", JSON.stringify(this.state.techs));
    }
  }
```
Então, eu verifico se o array anterior é diferente do array atual, se for faz alguma coisa, nesse caso estou adicionando uma novo array de tech no localStorage, baseado no array atual.
Como eu não preciso utilizar o prevProps pois esse componente não recebe props, então eu ignore colocando um `_` no primeiro parâmetro da função.

Agora temos outro cenário, precisamos fazer com que o array de techs venha preenchido se tiver algum item salvo no localStorage quando o componente aparece na tela.

```
 // Executado assim que o componente aparece na tela
  componentDidMount() {
    const techs = localStorage.getItem("@techs");

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
```

Agora eu pego as techs do localStorage, verifico se realmente veio alguma coisa, se sim, salvo no estado de `techs`. Se recarregar a página, pode verificar que o array de tech vai vir com o mesmo conteúdo que tem dentro do localStorage.



A função `componentWillUnmount` é utilizada muito pouco, mas um cenário seria, limpar um event listener. Imagina que você está usando um setTimeout dentro do componentDidMount e quando esse componente sair da tela, o setTimeout ainda continuara funcionando. Então o correro é utilizar o `componentWillUnmount` para limpar o event listener, no caso fazer um `clear` no `setTimeout`.


Os métodos mais utilizados são componentDidMout, depois componentDidUpdate e por fim componentWillUnmount, geralmente nessa sequência.

Fim: [https://github.com/tgmarinho/intro-react/tree/aula11-ciclo-de-vida-do-componente](https://github.com/tgmarinho/intro-react/tree/aula11-ciclo-de-vida-do-componente)