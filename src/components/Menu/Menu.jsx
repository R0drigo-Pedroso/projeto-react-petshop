import Estilo from "../Menu/Menu.module.css";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Blog</NavLink>
      <NavLink to="/produtos">Produtos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
};

export default Menu;
