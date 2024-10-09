import "../assets/CSS/cpdv.css"; 
import logoh from "../assets/img/Logo1.png";
import { FaSearch } from 'react-icons/fa'; 
import { FaRegCircleUser } from "react-icons/fa6"; 
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import posHeader from "../assets/img/posHeader.png"

function Cpdv() {
  const [busca, setBusca] = useState(""); 
  const navegar = useNavigate(); 

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  return (
    <>
    <div className="containerCpdvB">
      <div className="barra">
        <img src={logoh} alt="Logo" className="logo" />
        <div className="barra-pesquisa">
          <FaSearch className="icone-pesquisa" />
          <input
            type="text"
            placeholder="Buscar"
            className="input-pesquisa"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyPress={pesquisar}
          />
        </div>    
        <div className="containerservicos">
          <p className="divservicos">
            Serviços
            <SlArrowDown className="icone-seta" />
          </p>
        </div>
        <FaRegCircleUser className="icone-perfil" onClick={irParaPerfil} />
      </div>

      <div>
        <img src={posHeader} alt="" className="posHeader"/>
      </div>
      <h1>feweffeewf</h1>
    </div>  
    </>
  );
}

export default Cpdv;