import { useParams } from "react-router-dom";

import estilo from "./Categoria.module.css";

import ListaPosts from "../../components/ListaPosts/ListaPosts";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";

/* objetivo deste componente é exibir o listaPosts
filtrando pela categoria escolhida no meu ListaCategorias
*/
const Categoria = () => {
  const { nome } = useParams();
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Categorias</h2>

      <ListaCategorias />

      <ListaPosts url={`posts?categoria=${nome}`} />
    </section>
  );
};

export default Categoria;
