/* Usando estados de componentes */
import { useState, useEffect } from "react"; //Hooks do React

/* Importando api */
import servidorApi from "../../API/servidor-api";

/* Estilos css */
import estilo from "./ListaPosts.module.css";

const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, para posteriomente "preenchê-lo" com os dados vindos da API. Esta atribuição será feita com auxilio do setPosts (set - servirá para manipulação de dados) */
  const [posts, setPosts] = useState([]);

  console.log(servidorApi);
  const postsTemp = [];

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    getPosts();
  }, []);

  return (
    <div className={estilo.lista_posts}>
      {/* Função utilizando map */}
      {postsTemp.map(({ id, titulo, subtitulo }) => {
        return (
          <article key={id} className={estilo.post}>
            <h3>{titulo}</h3>
            <p>{subtitulo}</p>
          </article>
        );
      })}
    </div>
  );
};

export default ListaPosts;
