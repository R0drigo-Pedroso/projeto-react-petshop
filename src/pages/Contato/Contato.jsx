/* Estilização */
import estilo from "./Contato.module.css";

/* Componentes */
import Caixa from "../../components/Caixa/Caixa";

const Contato = () => {
  return (
    <section>
      <h2 className={estilo.titulo_secao}>Contato</h2>

      <Caixa>
        <p>
          <i>Em breve terá uma formulario para preenchimento</i>
        </p>
      </Caixa>
    </section>
  );
};

export default Contato;
