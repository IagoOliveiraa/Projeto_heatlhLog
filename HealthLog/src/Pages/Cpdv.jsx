import "../assets/CSS/cpdv.css";
import logoh from "../assets/img/Logo1.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import posHeader from "../assets/img/posHeader.png";

function Cpdv() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar o menu
  const navegar = useNavigate();

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto); // Alterna entre abrir e fechar o menu
  };

  return (
    <>
      <div className="containerCpdvB">
        {/* Barra Superior */}
        <div className="barraB">
          <img src={logoh} alt="Logo" className="logoB" />

          {/* Barra de Pesquisa */}
          <div className="barra-pesquisaB">
            <FaSearch className="icone-pesquisaB" />
            <input
              type="text"
              placeholder="Buscar"
              className="input-pesquisaB"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyPress={pesquisar}
            />
          </div>

          {/* Menu Sanduíche Serviços */}
          <div className="containerservicosB" onClick={toggleMenu}>
            <div className="divservicosB" onClick={toggleMenu}>
              <span>Serviços</span>
              <SlArrowDown className="icone-setaB" />
            </div>

            {menuAberto && (
              <div className="divmenuB">
                <a href="/EspecialidadesMedicas">Medicina</a>
                <a href="#">Odontologia</a>
                <a href="#">Estética</a>
              </div>
            )}
          </div>

          {/* Ícone de Perfil */}
          <FaRegCircleUser className="icone-perfilB" onClick={irParaPerfil} />
        </div>

        {/* Imagem Pós-Header */}
        <div>
          <img src={posHeader} alt="" className="posHeaderB" />
        </div>

        {/* Descrição */}
        <div className="abracoB">
          <h1 className="titDescriB">Clinica A</h1>
          <h3 className="descricaoB">
            Nossa clínica A é especializada nas áreas de X, Y e Z trazendo boas
            experiências de atendimento e resultados ao decorrer dos últimos 15 anos.
          </h3>
        </div>

        {/* Marcação de Consulta */}
        <div className="marqB">
          <h1>Marque já sua consulta</h1>
        </div>

        {/* Agendamento */}
        <div className="containerLaDeBaixoB">
          <div className="laDeBaixoB">
            <h2 className="nanneshoB">Ortopedia</h2>
            <button>Marcar Agendamento</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cpdv;
