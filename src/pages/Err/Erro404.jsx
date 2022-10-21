import estilo from "./Erro404.module.css";

/* Imgs */
import dog404 from "../../assets/images/catiorrinho404.svg";

export const Erro404 = () => {
  return (
    <section className={estilo.pagina404}>
      <h2 className={estilo.titulo_secao}>Au, au, au, foi mal!</h2>
      <div id="err404">
        <h3>Opa! Página não encontrada!</h3>
        <img
          className={estilo.imagem404}
          src={dog404}
          alt="ilustração cachorrinho"
        />
      </div>
    </section>
  );
};

export default Erro404;
