import { useState, useEffect } from 'react';
import '../CSS/Home.css'; // Importa o arquivo de CSS que define o estilo da página
import logosite from '../assets/Logo Health_log.png'; // Importa a imagem do logo do site
import iconperfil from '../assets/iconPerfil.png'; // Importa a imagem do ícone para linkar para a página
import bemvindo from '../assets/boasvindasFoto.png'; // Imagem de boas-vindas
import especMedicas from '../assets/Medicinafoto.png'; // Imagem de especialidades médicas
import especOdont from '../assets/OdontoFoto.png'; // Imagem de especialidades odontológicas
import especEstetica from '../assets/EsteticaFoto.png'; // Imagem de especialidades estéticas
import locFoto from '../assets/localizacaoFoto.png'; // Imagem de localização
import sobreFoto from '../assets/SobreFoto.png'; // Imagem sobre a empresa

function Home() {
  const [slideIndex, setSlideIndex] = useState(1); // Controla qual slide está sendo exibido

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

  return (
    <header className="home-container">
      <div className="cabeçalho">
        <div className="logo">
          <img src={logosite} alt="Health Log Logo" />
          <div className="boas-Vindas">
            <div className="frase-boasvindas">
              <h2>Escolha um serviço & <br /> reserve sua consulta</h2>
            </div>
          </div>
        </div>
        <div className="pesquisa-login">
          <input type="text" placeholder="Buscar" />
          <a href="/Login"><img src={iconperfil} alt="Icon Perfil" /></a>
        </div>
      </div>

      <section className="conteudo-principal">
        <div className="img-boasvindas">
          <img src={bemvindo} alt="" />
        </div>

        <div className="review-section">
          <h3>Avaliações</h3>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <p><strong>Emmy Bubble</strong></p>
              <p>Adorei usar o Health Log para agendar consultas. A interface é intuitiva e os lembretes são muito úteis. Recomendo!</p>
            </div>
            <div className="mySlides fade">
              <p><strong>John Doe</strong></p>
              <p>A plataforma facilitou muito o processo de agendamento de consultas. Uso e recomendo!</p>
            </div>
            <div className="mySlides fade">
              <p><strong>Jane Smith</strong></p>
              <p>Ótimo serviço! Acesso rápido e fácil. Continuarei utilizando para minhas consultas.</p>
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
              <button>Marcar agendamento</button>
            </div>
            <div className="especialidade-card">
              <h4>Dermatologia</h4>
              <p>Profissionais: Dra. Ana, Dr. Benicio</p>
              <p>Consultório: Clínica B</p>
              <button>Marcar agendamento</button>
            </div>
            <div className="especialidade-card">
              <h4>Ortopedia</h4>
              <p>Profissionais: Dra. Pietra, Dr. Marcos</p>
              <p>Consultório: Clínica C</p>
              <button>Marcar agendamento</button>
            </div>
          </div>

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
      </section>

      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>
          Health Log é uma plataforma inovadora projetada para simplificar o agendamento de consultas em diversas áreas da saúde, incluindo médicos, clínicas de estética e dentistas.
        </p>
        <img src={sobreFoto} alt="" />
        <address>
          <img src={locFoto} alt="Localização" />
          R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280
        </address>
      </footer>
    </header>
  );
}

export default Home;
