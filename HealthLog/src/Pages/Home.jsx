import { useState, useEffect } from 'react';
import '../CSS/Home.css';
import logosite from '../assets/Logo Health_log.png';

function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  // Função para exibir o slide avaliações
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

  // Função que automaticamente muda os slides a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="home-container">
      <header className="cabeçalho">
        <div className="logo">
          <img src={logosite} alt="Health Log Logo" />
          <h1>Health Log</h1>
        </div>

        <div className="pesquisa-login">
          <input type="text" placeholder="Buscar" />
          <a href="/Login">Login</a>
          <a href="/registro">Cadastra-se</a>
        </div>

        <div className="boas-Vindas">
          <h2>Escolha um serviço & reserve sua consulta</h2>
        </div>
      </header>

      <section className="conteudo-principal">
        <div className="review-section">
          <h3>Avaliações</h3>

          {/* Carrossel de Avaliações */}
          <div className="slideshow-container">
            <div className="mySlides fade">
              <p><strong>Emmy Bubble</strong></p>
              <p>
                Adorei usar o Health Log para agendar consultas. A interface é
                intuitiva e os lembretes são muito úteis. Recomendo!
              </p>
            </div>

            <div className="mySlides fade">
              <p><strong>John Doe</strong></p>
              <p>
                A plataforma facilitou muito o processo de agendamento de
                consultas. Uso e recomendo!
              </p>
            </div>

            <div className="mySlides fade">
              <p><strong>Jane Smith</strong></p>
              <p>
                Ótimo serviço! Acesso rápido e fácil. Continuarei utilizando
                para minhas consultas.
              </p>
            </div>
          </div>

          {/* Indicadores do Carrossel */}
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => showSlides(1)}></span>
            <span className="dot" onClick={() => showSlides(2)}></span>
            <span className="dot" onClick={() => showSlides(3)}></span>
          </div>
        </div>

        {/* Procedimentos */}
        <div className="procedimentos">
          <h3>Procedimentos mais buscados</h3>

          <div className="procedure-card">
            <h4>Oftalmologia</h4>
            <p>Profissionais: Dra. Julia, Dr. Sandro</p>
            <p>Consultório: Clínica A</p>
            <button>Marcar agendamento</button>
          </div>
        </div>

        {/* Serviços disponíveis */}
        <div className="services">
          <h3>Serviços disponíveis</h3>

          <div className="service-items">
            <a href="/EspecialidadesMedicas">
              <div className="service-item">Medicina</div>
            </a>
            <a href="/EspecialidadesOdontologicas">
              <div className="service-item">Odontologia</div>
            </a>
            <a href="/EspecialidadesEsteticas">
              <div className="service-item">Esteticista</div>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>
          Health Log é uma plataforma inovadora projetada para simplificar o
          agendamento de consultas...
        </p>
        <address>
          R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280
        </address>
      </footer>
    </div>
  );
}

export default Home;
