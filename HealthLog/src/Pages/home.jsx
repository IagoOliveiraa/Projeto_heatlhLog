import { useState, useEffect } from 'react';
import { FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { SlArrowDown } from 'react-icons/sl';
import '../CSS/Home.css';
import logosite from '../assets/img/Logo1.png';
import bemvindo from '../assets/img/boasvindasFoto.png';
import especMedicas from '../assets/img/MedicinaFoto.png';
import especOdont from '../assets/img/OdontoFoto.png';
import especEstetica from '../assets/img/EsteticaFoto.png';
import FotoSobre from '../assets/img/FotoSobre.png';
import { useNavigate } from 'react-router-dom'; 

function Home() {
  const [busca, setBusca] = useState('');
  const [slideIndex, setSlideIndex] = useState(1);
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); 

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

  const showSlides = (n) => {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const pesquisar = (e) => {
    if (e.key === 'Enter') {
      console.log('Buscando:', busca);
    }
  };

  const irParaPerfil = () => {
    if (user) {
      window.location.href = '/perfil';
    } else {
      window.location.href = '/login';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <>
      <header className="home-container">
        <div className="barra-home">
          <img src={logosite} alt="LogoHome" className="logoHome" />
          <div className="barra-pesquisaHome">
            <FaSearch className="icone-pesquisaHome" />
            <input
              type="text"
              placeholder="Buscar"
              className="input-pesquisaHome"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onKeyPress={pesquisar}
            />
          </div>
          <div className="containerservicosHome">
            <p className="divservicosHome">
              Serviços
              <a href="#"><SlArrowDown className="icone-setaHome" /></a>
            </p>
            <div className="divmenuHome">
              <a href="/EspecialidadesMedicas">Medicina</a>
              <a href="/EspecialidadesOdontologicas">Odontologia</a>
              <a href="/EspecialidadesEsteticas">Estética</a>
            </div>
          </div>
          <div className='PerfilHome'>
            {user ? (
              <>
                <p>Bem-vindo, {user.email}!</p>
                <button onClick={handleLogout}>Sair</button>
              </>
            ) : (
              <a href="/login"><FaRegUserCircle className="icone-perfilHome" onClick={irParaPerfil} /></a>
            )}
          </div>
        </div>
      </header>

      <div className='feijoes'>
        <h1>Escolha um serviço  & <br />
        reserve sua consulta</h1>
      </div>

      <div className="img-boasvindas">
        <img className='bemVindo' src={bemvindo} alt="Boas-vindas" /> 
      </div>

      <section className="conteudo-principal">
        <div className="review-section">
          <h3>Avaliações</h3>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <p><strong>Emmy Bubble</strong></p>
              <p>Adorei usar o Health Log para agendar consultas...</p>
            </div>
            <div className="mySlides fade">
              <p><strong>John Smith</strong></p>
              <p>A plataforma facilitou muito o processo de agendamento...</p>
            </div>
            <div className="mySlides fade">
              <p><strong>Aghata Montgomery</strong></p>
              <p>Ótimo serviço! Acesso rápido e fácil...</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => showSlides(1)}></span>
            <span className="dot" onClick={() => showSlides(2)}></span>
            <span className="dot" onClick={() => showSlides(3)}></span>
          </div>
        </div>

        <div className="procedimentos">
          <h3>Procedimentos mais buscados</h3>
          <div className="service-items">
            <div className="especialidade-card">
              <h4>Oftalmologia</h4>
              <p>Profissionais: Dra. Julia, Dr. Sandro</p>
              <p>Consultório: Clínica A</p>
              <a href="/Clinicaspertodevoce"><button>Marcar agendamento</button></a>
            </div>
            <div className="especialidade-card">
              <h4>Dermatologia</h4>
              <p>Profissionais: Dra. Ana, Dr. Benicio</p>
              <p>Consultório: Clínica B</p>
              <a href="/Clinicaspertodevoce"><button>Marcar agendamento</button></a>
            </div>
            <div className="especialidade-card">
              <h4>Ortopedia</h4>
              <p>Profissionais: Dra. Pietra, Dr. Marcos</p>
              <p>Consultório: Clínica C</p>
              <a href="/Clinicaspertodevoce"><button>Marcar agendamento</button></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>
          Health Log é uma plataforma inovadora projetada para simplificar o agendamento de consultas...
        </p>
        <img src={FotoSobre} alt="Sobre nós" />
        <div className='rodape'>
          <p>2024 © Health Log - Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;