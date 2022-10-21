import estilo from "./Caixa.module.css";

/* Versão com props desestruturada */
const Caixa = ({ children, listaDeClasses }) => {
  return (
    <div className={`${estilo.form_caixa} ${listaDeClasses || ""}`}>
      {children}
    </div>
  );
};

export default Caixa;
