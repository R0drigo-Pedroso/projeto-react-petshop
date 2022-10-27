/* Roteamenteos */
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

/* Components */
import Cabecalho from "./components/Cabecalho/Cabecalho";

/* Pages */
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";
import Erro404 from "./pages/Err/Erro404";
import Post from "./pages/Post/Posts";
import Categoria from "./pages/Categoria/Categoria";

const App = () => {
  return (
    <>
      {/* BrowserRouter - envolve todas as tags */}
      <BrowserRouter>
        <Cabecalho />

        <main className="limitador">
          {/* Switch - Envolve todas as pages que será assync */}
          <Switch>
            {/* Router - Envolve cada page que será trocada, ou seja, ao clicar em cada link do menu trocara, sem precisa carregar tudo novamente */}

            {/* outra forma de fazer rotas <Route exact path="/" component={Home}> */}
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/posts">
              <Redirect to="/" />
            </Route>

            <Route path="/posts/:id">
              <Post />
            </Route>

            {/* Estamos usando o :nome em vez de :id com o propósito de ter um URL amigável (slug) */}
            <Route exact path="/categoria/:nome">
              <Categoria />
            </Route>

            <Route path="/produtos">
              <Produtos />
            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/contato">
              <Contato />
            </Route>

            <Route path="*">
              <Erro404 />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
