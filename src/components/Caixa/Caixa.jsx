import estilo from "./Caixa.module.css";

const Caixa = (props) => {
  return <div className={estilo.form_caixa}>{props.children}</div>;
};

export default Caixa;
