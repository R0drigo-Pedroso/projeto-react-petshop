import { Link } from "react-router-dom";

/* Importação Components */
import Menu from "../Menu/Menu";

/* CSS */
import estilos from "./Cabecalho.module.css";

/* Importação logo */
import logo from "../../assets/images/logo.png";

const Cabecalho = () => {
  return (
    <header className={estilos.topo}>
      <div className="limitador">
        <h1>
          <Link to="/">
            <img src={logo} alt="PetShop - Patinha dentro de um coração" />
            PetShot
          </Link>
        </h1>

        <Menu></Menu>
      </div>
    </header>
  );
};

export default Cabecalho;
