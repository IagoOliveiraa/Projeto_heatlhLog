import "../CSS/ClinicaPertodevoce.css"; 
import logoh from "../assets/Logo1.png";
import { FaSearch } from 'react-icons/fa'; 
import { FaRegCircleUser } from "react-icons/fa6"; 
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import clinicaimg from "../assets/Clinicas.png";

function Clinica() {
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
          <div className="divmenu">
            <a href="/EspecialidadesMedicas">Medicina</a>
            <a href="#">Odontologia</a>
            <a href="#">Estética</a>
          </div>
        </div>
        <FaRegCircleUser className="icone-perfil" onClick={irParaPerfil} />
      </div>

      <div className="texto-clinicas">
        <h1>Clínicas perto de você</h1>
      </div>

      <div className="setas-laterais">
        <SlArrowLeft className="icone-seta-lateral" />
        <SlArrowRight className="icone-seta-lateral" />
      </div>

      <div className="retangulos-container">
        <div className="retangulo">
          <img src={clinicaimg} alt="Clínica A" className="imagem-retangulo" />
          <h2>Clínica A</h2>
          <p>Nossa clínica A é especializada</p>
          <p>Endereço: Rua a, N°1 cidade A</p>
          <p>Horário de funcionamento:</p>
          <p>SEG a SEX: das 8:00 às 22:00</p>
          <p>SAB e DOM: das 8:00 às 18:00</p>
        </div>
        <div className="retangulo">
          <img src={clinicaimg} alt="Clínica B" className="imagem-retangulo" />
          <h2>Clínica B</h2>
          <p>Nossa clínica B é especializada</p>
          <p>Endereço: Rua b, N°2 cidade B</p>
          <p>Horário de funcionamento:</p>
          <p>SEG a SEX: das 8:00 às 22:00</p>
          <p>SAB e DOM: das 8:00 às 18:00</p>
        </div>
      </div>

      <div className="retangulos-container">
        <div className="retangulo">
          <img src={clinicaimg} alt="Clínica C" className="imagem-retangulo" />
          <h2>Clínica C</h2>
          <p>Nossa clínica C é especializada</p>
          <p>Endereço: Rua c, N°3 cidade C</p>
          <p>Horário de funcionamento:</p>
          <p>SEG a SEX: das 8:00 às 22:00</p>
          <p>SAB e DOM: das 8:00 às 18:00</p>
        </div>
        <div className="retangulo">
          <img src={clinicaimg} alt="Clínica D" className="imagem-retangulo" />
          <h2>Clínica D</h2>
          <p>Nossa clínica D é especializada</p>
          <p>Endereço: Rua d, N°4 cidade D</p>
          <p>Horário de funcionamento:</p>
          <p>SEG a SEX: das 8:00 às 22:00</p>
          <p>SAB e DOM: das 8:00 às 18:00</p>
        </div>
      </div>

      {/* Texto adicional "Clínicas em geral" */}
      <div className="texto-clinicas-geral">
        <h2>Clínicas em geral</h2>
      </div>
    </>
  );
}

export default Clinica;
