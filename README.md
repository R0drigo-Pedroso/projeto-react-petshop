# React: Projeto PetShop

Projeto iniciado através do [Create React App](https://github.com/facebook/create-react-app).

Obs: Este Projeto poderia ser criado também a partir do Vite.

## Execução do App

Na 1ª vez, é necessário `npm install` para gerar node_modules (com dependência etc). E para excutar, sempre use `npm start` eacesse `localhost:3000`, mas caso esteja outra aplicação rodando, automaticamente a aplicação trocará de porta.

## Dica: Desabilitar o Compact Folders do VsCode em Configurações/Setting

## Sobre Moculos CSS

\*O uso de módulos CSS garante escopo de estilos, ou seja, o CSS criado em módulos só é aplicado no componente em que o módulo foi importado.
\*Arquivos de módulo devem ser nomeados como `Componente.module.css`.
\*A importação de módulos CSS deve ser feita com `import nome from "caminho-do-modulo"`.

## Sobre Media Query

### Mobile First:

\*tela a partir de X tamanho (min-width)

### Desktop First:

\*telas de até o tamanho X (max-width)

## Assyc

### Pages

\*As pages são os Router, ou seja, o que fazer as troca dentro da main
-Obs: O react pode ser gerenciado de vairas maneiras

### Components

\*Dentro das pastas `Components` São os fixos

## Roteamentos

### {/_ BrowserRouter - envolve todas as tags _/}

    <BrowserRouter>

### {/_ Switch - Envolve todas as pages que será assync _/}

    <Switch>

### {/_ Router - Envolve cada page que será trocada, ou seja, ao clicar em cada link do menu trocara, sem precisa carregar tudo novamente _/}

    <Route exact path="/">

## Uso de rotas com a lib react-router-dom (versão 5)

### Instalação

`npm install react-router-dom@5`

### App.jsx

1. Realizar a importação dos recursos da lib:
   `import { BrowserRouter, Route, Switch } from "react-router-dom";`

2. Envolver todo o conteúdo do App.jsx dentro do **BrowserRouter**

3. Cada componente que funciona como "página ou tela" deve estar dentro de um `<Route>`.

4. Os `<Route>` devem estar dentro de um `<Switch>` para que aconteça a troca entre componentes ao navegar.

**Obs.:** não coloque nada além de `<Route>` no `<Switch>`

#### Sintaxe alternativa para aplicar rotas:

`<Route exact path="/" component={Home}>`

`<Route path="/produtos" component={Produtos}>`

`<Route path="/sobre" component={Sobre}>`

`<Route path="/contato" component={Contato}>`

### Menu.jsx

1. Importar o NavLink:
   `import { NavLink } from "react-router-dom";`

2. Substituir a tag `<a>` pelo `<NavLink>` e o atributo `href` por `to`

### Criação de um componente de interface chamado Caixa

\*Em vez de usar uma `div` em cada página agrupando conteúdos diferentes, isolamos ela num componente gerérico (**Caixa**), aplicamos o CSS uma única vez usando módulo do componente, e programos através de `props` o carregamento dinâmico do conteúdo (**childen**) e de classes adicionais (**listaDeClasses**)

**Dica:** Você pode usar **destructuring** de objetos nas `props`!

## Usando uma API fake para simular processos de consumo de dados dinâmicos

### Instalação global do pacote **JSON-SERVER**

`npm install -g json-server`

obs.: se tiver problemas ao executar, utilize o **Node.js command prompt**

### Utilização de um arquivo.json para simular a base de dados da API

É necessário criar um **arquivo.json** em qualquer pasta em sua máquina (no nosso caso, usamos a própria pasta do petshop.) Este arquivo deve ser composto por um grande objeto contendo arrays com outros objetos.

### Execução do servidor da API

1. Usando de preferência o **node.js command prompt**, acesse a pasta onde está o **node-do-arquivo.json**
2. Execute o comando `json-server --watch nome-do-arquivo.json --port 3007`

obs.: O número da porta deve ser diferente de 3000 (que é padrão no json-server) pois esta porta já estará sendo usada pelo app **React**

Dica: no **package.json** do seu app adicione em `scripts` uma nova propriedade chamada `api` valendo `json-server --watch nome-do-arquivo.json --port 3007`. Desta forma, você poderá executar o server da API digitando simplesmente `npm run api`

Após a execução da API, cada array de objetos contido no **arquivo.json** se torna um `endpoint` da API, acessivel através da URL _localhost:porta/nome-do-endpoint_

Exemplos:

http://localhost:3007/categorias

http://localhost:3007/posts

http://localhost:3007/contatos

## React Hooks

Introduzidos na versão React 16.8, são funções que permitem manipular estados e outros recursos do React sem a necessidade de programar Classes. **Hooks** são funções que se conectam aos estados do React e aos recursos do ciclo de vida dos componentes da função. _Não funcionam dentro de classes_.

Mais informações: <https://www.javatpoint.com/react-hooks>

### useState

Função que retorna uma variável com o valor do estado (state) e uma função que permite atualizar o valor desta variável. Podemos ter vários useState em nossos componentes para gerenciar estados e dados diferentes.

### useEffect

Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.

Recebe dois parâmetros:

- 1º: função callback com o que será executado
- 2º: lista (array) de dependências que indicarão ao `useEffect` quando ele deverá funcionar

Se não passar a lista (ou seja, se deixar sem []), `useEffect` executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop infinito.

Se passar a lista vazia (ou seja, deixar o [] vazio), `useEffect` executará somente no momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback.

---

### 30 seletores para CSS

https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048

## MUI
