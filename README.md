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
