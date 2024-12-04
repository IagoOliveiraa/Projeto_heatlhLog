import "../assets/CSS/cpdv.css";
import logoh from "../assets/img/Logo1.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posHeader from "../assets/img/posHeader.png";

function Cpdv() {
  const [busca, setBusca] = useState("");
  const [menuAberto, setMenuAberto] = useState(false); // Estado para o menu desktop
  const [menuMobileAberto, setMenuMobileAberto] = useState(false); // Estado para o menu mobile
  const navegar = useNavigate();
  const [user, setUser] = useState(null); // Estado para o usuário

  // Função para verificar se o usuário está logado
  const isLoggedIn = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };

  useEffect(() => {
    // Verifica se o usuário está logado ao carregar a página
    if (!isLoggedIn()) {
      // Se não estiver logado, redireciona para a página de login
      navegar("/login");
    } else {
      // Obter dados do usuário do backend
      fetch("http://localhost:3000/user", { // Substitua pela URL do seu backend
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data); // Armazena as informações do usuário
        })
        .catch((error) => {
          console.error("Erro ao obter dados do usuário:", error);
        });
    }
  }, [navegar]);

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  const toggleMenu = () => {
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
              onKeyDown={pesquisar} // Substituído onKeyPress por onKeyDown
            />
          </div>

          {/* Menu Serviços (Desktop) */}
          <div className="containerservicosB">
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

          {/* Perfil do Usuário */}
          <div className="PerfilHome">
            {user ? (
              <>
                <p>Bem-vindo, {user.email}!</p>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);
                    navegar("/"); // Redireciona para a página inicial
                  }}
                >
                  Sair
                </button>
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
              <a href="/EspecialidadesMedicas" onClick={toggleMenuMobile}>
                Medicina
              </a>
              <a href="/EspecialidadesOdontologicas" onClick={toggleMenuMobile}>
                Odontologia
              </a>
              <a href="/EspecialidadesEsteticas" onClick={toggleMenuMobile}>
                Estética
              </a>
            </div>
          )}
        </div>

        <div>
          <img src={posHeader} alt="" className="posHeaderB" />
        </div>

        <div className="abracoB">
          <h1 className="titDescriB">Clínica A</h1>
          <h3 className="descricaoB">
            Nossa clínica A é especializada nas áreas de X, Y e Z, trazendo boas
            experiências de atendimento e resultados ao longo dos últimos 15
            anos.
          </h3>
        </div>

        <div className="marqB">
          <h1>Marque já sua consulta</h1>
        </div>

        <div className="containerLaDeBaixoB">
          <div className="laDeBaixoB">
            <h2 className="nanneshoB">Ortopedia</h2>
            <a href="/agendamento"><button >Marcar Agendamento</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cpdv;
