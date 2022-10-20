/* Estilização */
import estilo from "./Sobre.module.css";

const Sobre = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Sobre</h2>

      <div id="sobre">
        <h3>Missão</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A error quia
          nobis cupiditate officiis debitis saepe, dolorum quo ad, possimus
          sunt, minus laboriosam alias magni?
        </p>

        <h3>Visão</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quia,
          iste porro laborum soluta ipsum dicta minus harum quo animi sunt
          debitis ut corrupti placeat corporis assumenda tempore. Reprehenderit,
          eum. Libero assumenda iusto tempora quasi?
        </p>

        <h3>Valores</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam aut
          amet earum laboriosam delectus? Aliquam ratione tempore sapiente
          facilis at excepturi tempora repudiandae officia labore quae beatae,
          qui molestias rem facere similique, odio voluptatum. Ea laboriosam
          debitis quia culpa consectetur nam porro sapiente quae inventore!
        </p>
      </div>
    </section>
  );
};

export default Sobre;
