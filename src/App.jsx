/* Roteamenteos */
import { BrowserRouter, Switch, Route } from "react-router-dom";

/* Components */
import Cabecalho from "./components/Cabecalho/Cabecalho";

/* Pages */
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";
import Sobre from "./pages/Sobre/Sobre";
import Contato from "./pages/Contato/Contato";

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

            <Route path="/produtos">
              <Produtos />
            </Route>

            <Route path="/sobre">
              <Sobre />
            </Route>

            <Route path="/contato">
              <Contato />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
