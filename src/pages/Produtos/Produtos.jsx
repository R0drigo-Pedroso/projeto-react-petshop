/* Estilização */
import estilo from "./Produtos.module.css";

/* Componente */
import Caixa from "../../components/Caixa/Caixa";

const Produtos = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Produtos</h2>

      <Caixa listaDeClasses={estilo.produtos}>
        <article>
          <h3>Produtos 01</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo cum
            architecto quas ducimus neque eligendi ratione, laudantium eum dolor
            dignissimos, debitis accusamus est voluptatibus explicabo.
          </p>
        </article>

        <article>
          <h3>Produtos 02</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo cum
            architecto quas ducimus neque eligendi ratione, laudantium eum dolor
            dignissimos, debitis accusamus est voluptatibus explicabo.
          </p>
        </article>

        <article>
          <h3>Produtos 03</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo cum
            architecto quas ducimus neque eligendi ratione, laudantium eum dolor
            dignissimos, debitis accusamus est voluptatibus explicabo.
          </p>
        </article>
      </Caixa>
    </section>
  );
};

export default Produtos;
