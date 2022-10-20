import estilo from "./ListaPosts.module.css";

const ListaPosts = () => {
  return (
    <div className={estilo.lista_posts}>
      <article className={estilo.post}>
        <h3>Titulo do post 01</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          natus adipisci voluptates ea, molestias eveniet. Vero ipsum mollitia
          voluptatum doloribus doloremque magnam nisi quo, fugit repellendus
          distinctio officiis sint cupiditate!
        </p>
      </article>

      <article className={estilo.post}>
        <h3>Titulo do post 02</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          natus adipisci voluptates ea, molestias eveniet. Vero ipsum mollitia
          voluptatum doloribus doloremque magnam nisi quo, fugit repellendus
          distinctio officiis sint cupiditate!
        </p>
      </article>

      <article className={estilo.post}>
        <h3>Titulo do post 03</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          natus adipisci voluptates ea, molestias eveniet. Vero ipsum mollitia
          voluptatum doloribus doloremque magnam nisi quo, fugit repellendus
          distinctio officiis sint cupiditate!
        </p>
      </article>

      <article className={estilo.post}>
        <h3>Titulo do post 04</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          natus adipisci voluptates ea, molestias eveniet. Vero ipsum mollitia
          voluptatum doloribus doloremque magnam nisi quo, fugit repellendus
          distinctio officiis sint cupiditate!
        </p>
      </article>
    </div>
  );
};

export default ListaPosts;
