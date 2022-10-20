/* Estilização */
import estilo from "./Contato.module.css";

const Contato = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Contato</h2>

      <div id="contato">
        <p>
          <i>Em breve terá uma formulario para preenchimento</i>
        </p>
      </div>
    </section>
  );
};

export default Contato;
