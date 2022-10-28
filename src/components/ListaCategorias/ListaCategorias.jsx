/* Usando estados de componentes */
/* Api */
import servidorApi from "../../API/servidor-api";

/* Estilo CSS */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import estilo from "./ListaCategorias.module.css";

/* carregamento */
import LoadingCarregamento from "../LoadingCarregamento/LoadingCarregamento";

export const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);

  /* loading */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${servidorApi}/categorias`);
        const dados = await resposta.json();
        setCategorias(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) {
    return <LoadingCarregamento texto="Categorias..." />;
  }

  return (
    <div className={estilo.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => {
          return (
            <li key={id} id={nome}>
              <NavLink activeClassName={estilo.ativo} to={`/categoria/${nome}`}>
                {nome}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
