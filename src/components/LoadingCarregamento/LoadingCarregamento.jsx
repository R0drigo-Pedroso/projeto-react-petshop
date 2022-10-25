import imagemLoading from "../../assets/images/loading.svg";
import estilo from "./LoadingCarregamento.module.css";

const LoadingCarregamento = () => {
  return (
    <div className={estilo.loading}>
      <h2>Carregando...</h2>
      <img src={imagemLoading} alt="Imagem de carregamento" />
    </div>
  );
};

export default LoadingCarregamento;
