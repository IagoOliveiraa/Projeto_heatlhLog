import "../CSS/EspecialidadesOdontologicas.css";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import imagem200 from "../assets/img/grafico200.png";
import imagem89 from "../assets/img/grafico89.png";
import imagemhealthlog from "../assets/img/helthloggrafico.png";
import imagemmuitomais from "../assets/img/graficomuitomais.png";
import logoh from "../assets/img/Logo1.png";
import { FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EspecialidadesOdontologicas() {

  const [menuAberto, setMenuAberto] = useState(false)
  const [menuMobileAberto, setMenuMobileAberto] = useState(false)
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

  const toggleMenu = () => {
    console.log(menuAberto)

    setMenuAberto(!menuAberto)
  }

  const toggleMenuMobile = () => {
    setMenuMobileAberto(!menuMobileAberto)
  }

  return (
    <div className="containerJ">

      <div className="barraJ">
        <img src={logoh} alt="Logo" className="logoJ" />
        <div className="barra-pesquisaJ">
          <FaSearch className="icone-pesquisaJ" />
          <input
            type="text"
            placeholder="Buscar"
            className="input-pesquisaJ"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyPress={pesquisar}
          />
        </div>
        <div className="containerservicosJ">
          <p className="divservicosJ" onClick={toggleMenu}>
            Serviços
            <SlArrowDown className="icone-setaJ" />
          </p>
          {menuAberto && (
            <div className="divmenuJ">
              <a href="/EspecialidadesMedicas">Medicina</a>
              <a href="/EspecialidadesOdontologicas">Odontologia</a>
              <a href="/EspecialidadesEsteticas">Estética</a>
            </div>
          )}
        </div>

        <div className="hamburger-menuJ" onClick={toggleMenuMobile}>
                        {menuMobileAberto ? <FaTimes /> : <FaBars />}
                    </div>
                    {menuMobileAberto && (
                        <div className="menu-mobileAA">
                            <a href="/EspecialidadesMedicas">Medicina</a>
                            <a href="/EspecialidadesOdontologicas">Odontologia</a>
                            <a href="/EspecialidadesEsteticas">Estética</a>
                            <a href="/perfil">Perfil</a>
                        </div>
                    )}


        <FaRegCircleUser className="icone-perfilJ" onClick={irParaPerfil} />
      </div>
      {/* Seção de imagens no topo */}
      <div className="graficoJ">
        <img src={imagem200} alt="grafico200" />
        <img src={imagem89} alt="grafico89" />
        <img src={imagemhealthlog} alt="graficohealthlog" />
        <img src={imagemmuitomais} alt="graficomuitomais" />
      </div>

      {/* SEPARANDO CABEÇALHO*/}

      <div className="titulo1J">
        <h1>Especialidades Odontológicas</h1>
      </div>

      {/* SEPARANDO TITULO*/}

      {/* Grid das especialidades odontológicas */}
      <div className="todas-caixas1J">
        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Ortodontia</h2>
          <p>
            Foca na correção de dentes e mandíbulas desalinhados usando
            aparelhos e outros dispositivos
          </p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Endodontia</h2>
          <p>
            Trata de problemas no interior dos dentes, especialmente no
            tratamento de canais radiculares
          </p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Periodontia</h2>
          <p>
            Cuida das doenças das gengivas e dos tecidos de suporte dos dentes
          </p>
        </Link>
      </div>

      <div className="todas-caixas1J">
        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Cirurgia Bucomaxilofacial</h2>
          <p>
            Envolve procedimentos cirúrgicos complexos para tratar condições da
            boca, mandíbula e face
          </p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Odontopediatria</h2>
          <p>
            Especializa-se no atendimento odontológico de crianças e
            adolescentes
          </p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1J">
          <h2>Odontologia Restauradora</h2>
          <p>
            Foca em restaurar dentes danificados por cáries ou trauma, incluindo
            o uso de restaurações e coroas
          </p>
        </Link>
      </div>
    </div>
  );
}

export default EspecialidadesOdontologicas;
