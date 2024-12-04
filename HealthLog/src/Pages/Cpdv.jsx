import "../assets/CSS/cpdv.css";
import logoh from "../assets/img/Logo1.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import posHeader from "../assets/img/posHeader.png";

function Cpdv() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false); // Estado para o menu desktop
  const [menuMobileAberto, setMenuMobileAberto] = useState(false); // Estado para o menu mobile
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
    console.log(menuAberto);
    
    setMenuAberto(!menuAberto); // Alterna entre aberto e fechado no desktop
  };

  const toggleMenuMobile = () => {
    setMenuMobileAberto(!menuMobileAberto); // Alterna entre aberto e fechado no mobile
  };


  return (
    <>
      <div className="containerCpdvB">
        <div className="barraB">

          <img src={logoh} alt="Logo" className="logo" />

          <img src={logoh} alt="Logo" className="logoB" />

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

          <div className="containerservicosB">
            <p className="divservicosB">
              Serviços
              <SlArrowDown className="icone-setaB" />
            </p>
          </div>
          <FaRegCircleUser className="icone-perfilB" onClick={irParaPerfil} />
        </div>
 
        <div>
          <img src={posHeader} alt="" className="posHeaderB" />
        </div>
 
        <div className="abracoB">
          <h1 className="titDescriB">Clinica A</h1>
          <h3 className="descricaoB">
            Nossa clinica A é espcializada nas areas de X, Y e Z trazendo boas
            experiencias de atendimento e resultado ao decorrer dos ultimos 15
            anos
          </h3>
        </div>
 
      <div className="marqB"><h1>Marque já sua consulta</h1></div>
 
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

