import "../assets/CSS/EspecialidadesOdontologicas.css";
import { Link, useNavigate } from "react-router-dom";
import imagem200 from "../assets/img/grafico200.png";
import imagem89 from "../assets/img/grafico89.png";
import imagemhealthlog from "../assets/img/helthloggrafico.png";
import imagemmuitomais from "../assets/img/graficomuitomais.png";
import logoh from "../assets/img/Logo1.png";
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { useState, useEffect } from "react";

function EspecialidadesOdontologicas() {
  const [busca, setBusca] = useState("");
  const navegar = useNavigate();
  const [user, setUser] = useState(null); // Adicione o estado para o usuário

  // Função para verificar se o usuário está logado
  const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    // Verifica se o usuário está logado ao carregar a página
    if (!isLoggedIn()) {
      // Se não estiver logado, redireciona para a página de login
      navigate('/login');
    } else {
      // Obter dados do usuário do backend
      fetch('/user', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data); // Armazena as informações do usuário
        })
        .catch((error) => {
          console.error('Erro ao obter dados do usuário:', error);
        });
    }
  }, []); 

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  return (
    <div className="container">
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
        <div className='PerfilHome'>
          {user ? (
            <>
              <p>Bem-vindo, {user.email}!</p>
              <button onClick={() => {
                localStorage.removeItem('token');
                setUser(null);
                navigate('/'); // Redireciona para a página inicial
              }}>Sair</button>
            </>
          ) : (
            <FaRegCircleUser className="icone-perfil" onClick={irParaPerfil} />
          )}
        </div>
      </div>

      <div className="grafico">
        <img src={imagem200} alt="grafico200" />
        <img src={imagem89} alt="grafico89" />
        <img src={imagemhealthlog} alt="graficohealthlog" />
        <img src={imagemmuitomais} alt="graficomuitomais" />
      </div>

      <div className="titulo1">
        <h1>Especialidades Odontológicas</h1>
      </div>

      <div className="todas-caixas1">
        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Ortodontia</h2>
          <p>Foca na correção de dentes e mandíbulas desalinhados usando aparelhos e outros dispositivos</p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Endodontia</h2>
          <p>Trata de problemas no interior dos dentes, especialmente no tratamento de canais radiculares</p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Periodontia</h2>
          <p>Cuida das doenças das gengivas e dos tecidos de suporte dos dentes</p>
        </Link>
      </div>

      <div className="todas-caixas1">
        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Cirurgia Bucomaxilofacial</h2>
          <p>Envolve procedimentos cirúrgicos complexos para tratar condições da boca, mandíbula e face</p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Odontopediatria</h2>
          <p>Especializa-se no atendimento odontológico de crianças e adolescentes</p>
        </Link>

        <Link to="/ClinicasPertoDeVoce" className="caixa1">
          <h2>Odontologia Restauradora</h2>
          <p>Foca em restaurar dentes danificados por cáries ou trauma, incluindo o uso de restaurações e coroas</p>
        </Link>
      </div>
    </div>
  );
}

export default EspecialidadesOdontologicas;