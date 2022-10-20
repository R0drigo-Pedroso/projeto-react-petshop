import estilo from "../Menu/Menu.module.css";

import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink exact activeClassName={estilo.ativo} to="/">
        Blog
      </NavLink>
      <NavLink activeClassName={estilo.ativo} to="/produtos">
        Produtos
      </NavLink>
      <NavLink activeClassName={estilo.ativo} to="/sobre">
        Sobre
      </NavLink>
      <NavLink activeClassName={estilo.ativo} to="/contato">
        Contato
      </NavLink>
    </nav>
  );
};

export default Menu;
