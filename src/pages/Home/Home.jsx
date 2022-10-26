/* Estilização Home */
import estilo from "./Home.module.css";

/* Componest */
import ListaPosts from "../../components/ListaPosts/ListaPosts";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";

const Home = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Pet Noticias</h2>

      <ListaCategorias />

      <ListaPosts />
    </section>
  );
};

export default Home;
