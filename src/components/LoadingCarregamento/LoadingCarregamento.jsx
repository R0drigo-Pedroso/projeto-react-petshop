import imagemLoading from "../../assets/images/loading.svg";
import estilo from "./LoadingCarregamento.module.css";

const LoadingCarregamento = (props) => {
  return (
    <div className={estilo.loading}>
      <h2>{props.texto}</h2>
      <img src={imagemLoading} alt="Imagem de carregamento" />
    </div>
  );
};

export default LoadingCarregamento;
