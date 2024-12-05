import logosite from "../assets/img/Logo1.png"; // Logo do site
import { FaRegUserCircle } from "react-icons/fa"; // Ícones de usuário e pesquisa
import { Link } from "react-router";
import "../CSS/newLogin.css";

export function Header() {
  return (
    <header className="barra-home">
      <Link to={"/inicio"}>
        <img src={logosite} alt="LogoHome" className="logoHome" />
      </Link>
      <div className="header-menus">
        <Link to={"/agendamento"}>Novo agendamento</Link>
        <Link to={"/perfil"}>
          <FaRegUserCircle className="icone-perfilHome" />
        </Link>
      </div>
    </header>
  );
}