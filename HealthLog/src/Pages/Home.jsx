import { useState, useEffect } from "react"; // Hooks para gerenciar estado e efeitos colaterais
import { FaRegUserCircle, FaSearch } from "react-icons/fa"; // Ícones de usuário e pesquisa
import { SlArrowDown } from "react-icons/sl"; // Ícone de seta para dropdown
import "../assets/CSS/home.css"; // Estilos CSS importados
import logosite from "../assets/img/Logo1.png"; // Logo do site
import bemvindo from "../assets/img/boasvindasFoto.png"; // Imagem da seção de boas-vindas
import especMedicas from "../assets/img/Medicinafoto.png"; // Imagem de especialidade médica
import especOdont from "../assets/img/OdontoFoto.png"; // Imagem de odontologia
import especEstetica from "../assets/img/EsteticaFoto.png"; // Imagem de estética
import FotoSobre from "../assets/img/FotoSobre.png"; // Imagem da seção "Sobre Nós"
import { Link } from "react-router";
import { Header } from "../componets/Header";

function Home() {
  const [slideIndex, setSlideIndex] = useState(1); // Estado para controlar o slide atual

  // Função para exibir os slides de avaliação
  const showSlides = (n) => {
    let slides = document.getElementsByClassName("mySlides"); // Coleta os slides
    let dots = document.getElementsByClassName("dot"); // Coleta os indicadores

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Remove a classe "active" de todos os indicadores
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    // Exibe o slide atual e destaca o indicador correspondente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
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
    if (e.key === "Enter") {
      console.log("Buscando:", busca); // Exibe o termo de busca no console
    }
  };

  // Função para redirecionar para a página de perfil
  const irParaPerfil = () => {
    console.log("Indo para o perfil...");
  };

  return (
    <>
      <Header/>

      <div className="feijoes">
        <h1>
          Escolha um serviço & <br />
          reserve sua consulta
        </h1>
        <p>
          Organize seus compromissos escolhendo a data e o horário que melhor se
          encaixam na sua agenda, de forma simples e prática.
        </p>
        <Link to="/agendamento">Novo agendamento</Link>
        <div className="img-boasvindas">
          <img className="bemVindo" src={bemvindo} alt="Boas-vindas" />
        </div>
      </div>

      {/* Seção de boas-vindas */}

      {/* Seção principal com avaliações e procedimentos */}
      <section className="conteudo-principal">
        {/* Seção de procedimentos mais buscados */}
        <div className="procedimentos">
          <h3>Procedimentos mais</h3>
          <div className="service-items">
            <div className="especialidade-card">
              <h4>Oftalmologia</h4>
              <p>Veja opções de clinicas</p>
              <a href="/clinicaOftamologia">
                <button>Marcar agendamento</button>
              </a>
            </div>
            <div className="especialidade-card">
              <h4>Dermatologia</h4>
              <p>Veja opções de clinicas</p>
              <a href="/clinicasOftamologia">
                <button>Marcar agendamento</button>
              </a>
            </div>
            <div className="especialidade-card">
              <h4>Ortopedia</h4>
              <p>Veja opções de clinicas</p>
              <a href="/clinicasOftamologia">
                <button>Marcar agendamento</button>
              </a>
            </div>
          </div>

          {/* Seção de serviços */}
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

      {/* Rodapé */}
      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>
          Health Log é uma plataforma inovadora projetada para simplificar o{" "}
          <br /> agendamento de consultas em diversas áreas da saúde, incluindo{" "}
          <br /> médicos, clínicas de estética e dentistas. Através de uma
          interface <br /> intuitiva, os usuários podem facilmente encontrar
          profissionais <br /> disponíveis, verificar horários e marcar
          compromissos de forma <br /> rápida e eficiente, tudo em um só lugar.
        </p>

        <img src={FotoSobre} alt="Sobre nós" />

        <div className="rodape">
          <p>2024 © Health Log - Todos os Direitos Reservados.</p>
        </div>
      </footer>
    </>
  );
}

export default Home;