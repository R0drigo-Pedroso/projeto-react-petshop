/* Usando estados de componentes */
import { useState, useEffect } from "react"; //Hooks do React

/* Importando api */
import servidorApi from "../../API/servidor-api";
import LoadingCarregamento from "../LoadingCarregamento/LoadingCarregamento";

/* Estilos css */
import estilo from "./ListaPosts.module.css";

const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio, para posteriomente "preenchê-lo" com os dados vindos da API. Esta atribuição será feita com auxilio do setPosts (set - servirá para manipulação de dados) */
  const [posts, setPosts] = useState([]);

  /* loading */
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${servidorApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim " + error.message);
      }
    }
    getPosts();
  }, []);

  /* Sobre useEffect
   *Este hook visa permitir um maior controle sobre "efeitos colaterais" na execução do componente.
A
   Recebe dois parâmetros:
   1º Função callback com o que será executado (monitora o que foi programado).

   2º Lista de dependencias que indicarão ao useEffect quando ele deverá funcionar.

   -se não passar a lista (ou seja, se deixar sem []), useEffect executará toda vez que o componente for renderizado. Portanto, o callback se torna um loop o infinito.

   -se passar a lista vazia (ou seja, deixar p [] vazio), useEffect executará somente no momento que o componnte é renderizado pela primeira vez, evitando o loop infinito do callback
   */

  if (loading) {
    return <LoadingCarregamento />;
  }

  return (
    <div className={estilo.lista_posts}>
      {/* Função utilizando map */}
      {posts.map(({ id, titulo, subtitulo }) => {
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
