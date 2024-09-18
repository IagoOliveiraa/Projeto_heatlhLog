import { useState, useEffect } from 'react'; 
import '../CSS/Home.css'; // Importa o arquivo de CSS que define o estilo da página
import logosite from '../assets/Logo Health_log.png'; // Importa a imagem do logo do site
import iconperfil from '../assets/iconPerfil.png';// importa a imagem do icon para linkar para a página
//perfil

function Home() {

  // Estado slideIndex para controlar qual slide do carrossel está sendo exibido no momento
  const [slideIndex, setSlideIndex] = useState(1); // Inicia o slideIndex com o valor 1, que representa o primeiro slide

  // Função que mostra o slide atual com base no índice (n) fornecido
  const showSlides = (n) => {
    let slides = document.getElementsByClassName('mySlides'); // Coleta todos os elementos com a classe 'mySlides' (os slides)
    let dots = document.getElementsByClassName('dot'); // Coleta todos os elementos com a classe 'dot' (os pontos que indicam os slides)

    // Verifica se o índice n excede o número de slides, e se sim, volta ao primeiro slide
    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) { // Se o índice n for menor que 1, vai para o último slide
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n); // Se n for válido, define o slideIndex como n
    }

    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    // Remove a classe 'active' de todos os pontos
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    // Exibe o slide atual e adiciona a classe 'active' ao ponto correspondente
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  };

  // Efeito que automaticamente avança os slides a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      showSlides(slideIndex + 1); // Avança para o próximo slide
    }, 3000); // Intervalo de 3000ms (3 segundos)
    
    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [slideIndex]); // O efeito depende de slideIndex, então é executado sempre que ele muda

  return (
    <div className="home-container"> {/* Contêiner principal da página */}
      
      {/* Cabeçalho com o logo, barra de busca e links de login/cadastro */}
      <header className="cabeçalho">
        <div className="logo">
          <img src={logosite} alt="Health Log Logo" /> {/* Logo do site */}
        </div>

        <div className="pesquisa-login">
          <input type="text" placeholder="Buscar" /> {/* Barra de busca */}
          <a href="/Perfil"><img src={iconperfil} alt="Icon Perfil" /></a> {/* Link para a página de login */}
          <a href="">Cadastra-se</a> {/* Link para a página de cadastro */}
        </div>

        <div className="boas-Vindas">
          <h2>Escolha um serviço & reserve sua consulta</h2> {/* Mensagem de boas-vindas */}
        </div>
      </header>

      <section className="conteudo-principal"> {/* Seção principal da página */}
        
        {/* Seção de avaliações dos usuários */}
        <div className="review-section">
          <h3>Avaliações</h3>

          {/* Carrossel de Avaliações */}
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

          {/* Indicadores do Carrossel (pontos que indicam o slide ativo) */}
          <div style={{ textAlign: 'center' }}>
            <span className="dot" onClick={() => showSlides(1)}></span> {/* Primeiro ponto */}
            <span className="dot" onClick={() => showSlides(2)}></span> {/* Segundo ponto */}
            <span className="dot" onClick={() => showSlides(3)}></span> {/* Terceiro ponto */}
          </div>
        </div>

        {/* Seção de Procedimentos */}
        <div className="procedimentos">
          <h3>Procedimentos mais buscados</h3>

          {/* Cartão com informações sobre oftalmologia */}
          <div className="procedure-card">
            <h4>Oftalmologia</h4>
            <p>Profissionais: Dra. Julia, Dr. Sandro</p>
            <p>Consultório: Clínica A</p>
            <button>Marcar agendamento</button> {/* Botão para agendar uma consulta */}
          </div>
        </div>

        {/* Seção de Serviços disponíveis */}
        <div className="services">
          <h3>Serviços disponíveis</h3>

          {/* Links para diferentes categorias de serviços */}
          <div className="service-items">
            <a href="/EspecialidadesMedicas">
              <div className="service-item">Medicina</div> {/* Serviço de Medicina */}
            </a>
            <a href="/EspecialidadesOdontologicas">
              <div className="service-item">Odontologia</div> {/* Serviço de Odontologia */}
            </a>
            <a href="/EspecialidadesEsteticas">
              <div className="service-item">Esteticista</div> {/* Serviço de Estética */}
            </a>
          </div>
        </div>
      </section>

      {/* Rodapé da página */}
      <footer className="footer">
        <h3>Sobre Nós</h3>
        <p>Health Log é uma plataforma inovadora projetada para simplificar o agendamento de consultas em diversas áreas da saúde...</p>
        <address>R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280</address> {/* Endereço da empresa */}
      </footer>
    </div>
  );
}

export default Home; // Exporta o componente Home para ser usado em outras partes do projeto
