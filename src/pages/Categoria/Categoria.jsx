import estilo from "./Categoria.module.css";

/* objetivo deste componente é exibir o listaPosts
filtrando pela categoria escolhida no meu ListaCategorias
*/
export const Categoria = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Pet Noticias</h2>
    </section>
  );
};

export default Categoria;
