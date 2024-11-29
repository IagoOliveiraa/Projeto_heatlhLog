import "../assets/CSS/cpdv.css";
import logoh from "../assets/img/Logo1.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posHeader from "../assets/img/posHeader.png";
import { Link } from "react-router-dom"; // Importe o Link do React Router

function Cpdv() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false); // Estado para o menu desktop
  const [menuMobileAberto, setMenuMobileAberto] = useState(false); // Estado para o menu mobile
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

          {/* Menu Serviços (Desktop) */}
          <div className="containerservicosB" >
            <div className="divservicosB" onClick={toggleMenu}>
              Serviços
              <SlArrowDown className="icone-setaB" />
            </div>
            {menuAberto && (
              <div className="divmenuB">
                <a href="/EspecialidadesMedicas">Medicina</a>
                <a href="/EspecialidadesOdontologicas">Odontologia</a>
                <a href="/EspecialidadesEsteticas">Estética</a>
              </div>
            )}
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
            <FaRegCircleUser className="icone-perfilB" onClick={irParaPerfil} />
          )}
        </div>


          {/* Menu Hamburguer (Mobile) */}
          <div className="hamburger-menuB" onClick={toggleMenuMobile}>
            {menuMobileAberto ? <FaTimes /> : <FaBars />}
          </div>
          {menuMobileAberto && (
            <div className="menu-mobileB">
              <a href="/EspecialidadesMedicas">Medicina</a>
              <a href="/EspecialidadesOdontologicas">Odontologia</a>
              <a href="/EspecialidadesEsteticas">Estética</a>
            </div>
          )}

          <FaRegCircleUser className="icone-perfilB" onClick={irParaPerfil} />
        </div>

        <div>
          <img src={posHeader} alt="" className="posHeaderB" />
        </div>

        <div className="abracoB">
          <h1 className="titDescriB">Clinica A</h1>
          <h3 className="descricaoB">
            Nossa clinica A é especializada nas áreas de X, Y e Z, trazendo boas
            experiências de atendimento e resultado ao decorrer dos últimos 15
            anos.
          </h3>
        </div>


        <div className="marqB">
          <h1>Marque já sua consulta</h1>
        </div>

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