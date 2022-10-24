import servidorApi from "../../API/servidor-api";

import estilo from "./ListaPosts.module.css";

const ListaPosts = () => {
  console.log(servidorApi);
  const postsTemp = [];

  const getPosts = async () => {
    try {
      const resposta = await fetch(`${servidorApi}/posts`);
      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.log("Deu ruim " + error.message);
    }
  };

  getPosts();

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
