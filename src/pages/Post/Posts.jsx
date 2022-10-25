/* import de Parâmentros */
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

/* Import css */
import estilo from "./Post.module.css";

/* Import Componentes */
import Caixa from "../../components/Caixa/Caixa";
import LoadingCarrgamento from "../../components/LoadingCarregamento/LoadingCarregamento";

/* Import da Api */
import servidorApi from "../../API/servidor-api";

const Post = () => {
  const [umPost, setUmPost] = useState([]);

  /* loading - estado de um componente*/
  const [loading, setLoading] = useState(true);

  /* hook do react-router que permite utilizar recursos de navegação no histórico do navegador */
  let history = useHistory();

  /* useParams() - Hook do react-router que permite acesso/manipulação de parâmentros vindo da URL */
  const { id } = useParams();

  useEffect(() => {
    async function getUmPost() {
      try {
        const resposta = await fetch(`${servidorApi}/posts/${id}`);
        const dados = await resposta.json();
        setUmPost(dados);
        setLoading(false);

        if (Object.keys(dados).length === 0) {
          /* Esta sendo forçado a redirecionamento numa rota de primeiro nivel que não e existe. Com isso, na prática, o router traz o pagina404 */
          history.push("/404"); /* é manda para um rota não existente */
        }
      } catch (error) {
        console.log("Erro ao encontra Post: " + error.message);
      }
    }
    getUmPost();
  }, [id]); /* id é uma dependência para o useEffect */

  /* loop de carregamento */
  if (loading) {
    return <LoadingCarrgamento />;
  }

  return (
    <section>
      <h2 className={estilo.titulo_secao}>{umPost.titulo}</h2>

      <Caixa>
        <h3>{umPost.categotia}</h3>
        <p>{umPost.descricao}</p>
      </Caixa>
    </section>
  );
};

export default Post;
