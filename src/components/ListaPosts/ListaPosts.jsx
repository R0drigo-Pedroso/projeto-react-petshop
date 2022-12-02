/* Usando estados de componentes */
import { useState, useEffect } from "react"; //Hooks do React

/* Importando api */
import servidorApi from "../../API/servidor-api";

import ArtigoPost from "../ArtigoPost/ArtigoPost";

import LoadingCarregamento from "../LoadingCarregamento/LoadingCarregamento";

/* Estilos css */
import estilo from "./ListaPosts.module.css";

const ListaPosts = ({ categoria }) => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts.json`);
        const dados = await resposta.json(); /* Objetaão de dados */

        let listaDePosts = [];

        for (const post in dados) {
          const objetoPost = {
            id: post /* a chave/string gerada pelo firebase será com um id */,
            titulo: dados[post].titulo,
            subtitulo: dados[post].subtitulo,
            descricao: dados[post].descricao,
            categoria: dados[post].categoria,
          };

          listaDePosts.push(objetoPost);

          /* Se categoria for escolhida/clicada */
          if (categoria) {
            /* Então vamos fazer uma lista de posts com filtro de categoria */

            /* A cada vez que o loop for é executado, pegamos a categoria de cada post e comparamos com a categoria escolhida pelo usuário */
            listaDePosts = listaDePosts.filter(
              /* Se esta comparação for verdadeira, guardamos o post na listaDePosts. Caso contrário, é descartado pelo filtro */
              (cadaPost) => cadaPost.categoria === categoria
            );
          }
        }

        setPosts(listaDePosts);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    getPosts();
  }, [categoria]);

  if (loading) {
    return <LoadingCarregamento texto="Posts..." />;
  }

  if (posts.length !== 0) {
    return (
      <div className={estilo.lista_posts}>
        {/* Função utilizando map */}
        {posts.map(({ id, titulo, subtitulo }) => {
          return (
            <ArtigoPost
              key={id}
              id={id}
              titulo={titulo}
              subtitulo={subtitulo}
              classe={estilo.post}
            />
          );
        })}
      </div>
    );
  } else {
    return <h2>Nenhuma post encontrado</h2>;
  }
};

export default ListaPosts;
