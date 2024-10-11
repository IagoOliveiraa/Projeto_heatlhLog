import { useState, useEffect } from 'react'; // Hooks para gerenciar estado e efeitos colaterais
import { FaRegUserCircle, FaSearch } from 'react-icons/fa'; // Ícones de usuário e pesquisa
import { SlArrowDown } from 'react-icons/sl'; // Ícone de seta para dropdown
import '../CSS/Home.css'; // Estilos CSS importados
import logosite from '../assets/Logo1.png'; // Logo do site
import bemvindo from '../assets/boasvindasFoto.png'; // Imagem da seção de boas-vindas
import especMedicas from '../assets/Medicinafoto.png'; // Imagem de especialidade médica
import especOdont from '../assets/OdontoFoto.png'; // Imagem de odontologia
import especEstetica from '../assets/EsteticaFoto.png'; // Imagem de estética
import locFoto from '../assets/localizacaoFoto.png'; // Imagem de localização
import FotoSobre from '../assets/FotoSobre.png'; // Imagem da seção "Sobre Nós"

function Home() {
  // Estado para gerenciar o texto da barra de busca
  const [busca, setBusca] = useState('');
  // Estado para controlar o slide atual
  const [slideIndex, setSlideIndex] = useState(1);

  // Função para exibir os slides de avaliação
  const showSlides = (n) => {
    let slides = document.getElementsByClassName('mySlides'); // Coleta os slides
    let dots = document.getElementsByClassName('dot'); // Coleta os indicadores

    // Lógica para rodar os slides em loop
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Remove a classe "active" de todos os indicadores
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Exibe o slide atual e destaca o indicador correspondente
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  // Efeito para fazer os slides avançarem automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1); // Avança para o próximo slide
    }, 3000); // Intervalo de 3 segundos
    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [slideIndex]);

  // Função de pesquisa acionada ao pressionar Enter
  const pesquisar = (e) => {
    if (e.key === 'Enter') {
      console.log('Buscando:', busca); // Exibe o termo de busca no console
    }
  };

  // Função para redirecionar para a página de perfil
  const irParaPerfil = () => {
    console.log('Indo para o perfil...');
  };

  return (
    <header className="home-container">
      {/* Cabeçalho com logo, barra de pesquisa, menu de serviços e ícone de perfil */}

      <div className="barra">

        <img src={logosite} alt="Logo" className="logo" /> {/* Substituir logoh por logosite */}

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
            <a href="#"><SlArrowDown className="icone-seta" /></a>
          </p>
          <div className="divmenu">
            <a href="/EspecialidadesMedicas">Medicina</a>
            <a href="/EspecialidadesOdontologicas">Odontologia</a>
            <a href="/EspecialidadesEsteticas">Estética</a>
          </div>
        </div>

        <div className='Perfil'>

            <a href="/Perfil"><FaRegUserCircle className="icone-perfil" onClick={irParaPerfil} /></a> {/* Corrigi o nome do ícone */}

            </div>

            
       
      </div>
      
      <div className="img-boasvindas">
          <img src={bemvindo} alt="Boas-vindas" /> {/* Imagem de boas-vindas */}
        </div>


      {/* Seção principal com boas-vindas, avaliações e procedimentos */}
      <section className="conteudo-principal">
        

        <div className="review-section">
          <h3>Avaliações</h3>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <p><strong>Emmy Bubble</strong></p>
              <p>Adorei usar o Health Log para agendar consultas. A interface é intuitiva e os lembretes são muito úteis. Recomendo!</p>
            </div>
            <div className="mySlides fade">
              <p><strong>John Smith</strong></p>
              <p>A plataforma facilitou muito o processo de agendamento de consultas. Uso e recomendo!</p>
            </div>
            <div className="mySlides fade">
              <p><strong>Aghata Montgomery</strong></p>
              <p>Ótimo serviço! Acesso rápido e fácil. Continuarei utilizando para minhas consultas.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => showSlides(1)}></span>
            <span className="dot" onClick={() => showSlides(2)}></span>
            <span className="dot" onClick={() => showSlides(3)}></span>
          </div>
        </div>

        {/* Seção de procedimentos mais buscados */}
        <div className="procedimentos">
          <h3>Procedimentos mais buscados</h3>
          <div className="service-items">
            <div className="especialidade-card">
              <h4>Oftalmologia</h4>
              <p>Profissionais: Dra. Julia, Dr. Sandro</p>
              <p>Consultório: Clínica A</p>
              <a href="/Clinicaspertodevocê"><button>Marcar agendamento</button></a>
            </div>
            <div className="especialidade-card">
              <h4>Dermatologia</h4>
              <p>Profissionais: Dra. Ana, Dr. Benicio</p>
              <p>Consultório: Clínica B</p>
              <a href="/Clinicaspertodevocê"><button>Marcar agendamento</button></a>
            </div>
            <div className="especialidade-card">
              <h4>Ortopedia</h4>
              <p>Profissionais: Dra. Pietra, Dr. Marcos</p>
              <p>Consultório: Clínica C</p>
              <a href="/Clinicaspertodevocê"><button>Marcar agendamento</button></a>
            </div>
          </div>

          <div className="Servicos">
            <h3>Serviços disponíveis</h3>
            <div className="service-items">
              <a href="/EspecialidadesMedicas" className="service-link">
                <div className="service-item">
                  <img src={especMedicas} alt="Especialidades Médicas" />
                  <span>Medicina</span>
                </div>
              </a>
              <a href="/EspecialidadesOdontologicas" className="service-link">
                <div className="service-item">
                  <img src={especOdont} alt="Especialidades Odontológicas" />
                  <span>Odontologia</span>
                </div>
              </a>
              <a href="/EspecialidadesEsteticas" className="service-link">
                <div className="service-item">
                  <img src={especEstetica} alt="Especialidades Estéticas" />
                  <span>Esteticista</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>
          Health Log é uma plataforma inovadora projetada para simplificar o <br /> agendamento
          de consultas em diversas áreas da saúde, incluindo <br /> médicos, clínicas de estética e
          dentistas. Através de uma interface <br /> intuitiva, os usuários podem facilmente encontrar
          profissionais <br /> disponíveis, verificar horários e marcar compromissos de forma <br /> rápida e eficiente,
          tudo em um só lugar.
        </p>
        <img src={FotoSobre} alt="Sobre nós" />
        <div className="finalHome">
          <div className="localizacao">
            <img src={locFoto} alt="Localização" />
          </div>
          <p>R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-289</p>
        </div>
      </footer>
    </header>
  );
}

export default Home;
