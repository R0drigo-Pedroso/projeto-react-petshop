import estilo from "./Erro404.module.css";

/* Componentes */
import Caixa from "../../components/Caixa/Caixa";

/* Imgs */
import dog404 from "../../assets/images/catiorrinho404.svg";

export const Erro404 = () => {
  return (
    <section className={estilo.pagina404}>
      <h2 className={estilo.titulo_secao}>Au, au, au, foi mal!</h2>
      <Caixa>
        <h3>Opa! Página não encontrada!</h3>
        <img
          className={estilo.imagem404}
          src={dog404}
          alt="ilustração cachorrinho"
        />
      </Caixa>
    </section>
  );
};

export default Erro404;
