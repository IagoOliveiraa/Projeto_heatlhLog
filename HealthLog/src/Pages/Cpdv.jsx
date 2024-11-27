import "../assets/CSS/cpdv.css";
import logoh from "../assets/img/Logo1.png";
import { FaSearch } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import posHeader from "../assets/img/posHeader.png";
import { Link } from "react-router-dom"; // Importe o Link do React Router

function Cpdv() {
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
    <>
      <div className="containerCpdvB">
        <div className="barraB">
          <img src={logoh} alt="Logo" className="logo" />
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
              <Link to="/agendamento"> <button>Marcar Agendamento</button> </Link> {/* Utilize o Link aqui */}

          </div>
        </div>
      </div>


    </>
  );
}

export default Cpdv;