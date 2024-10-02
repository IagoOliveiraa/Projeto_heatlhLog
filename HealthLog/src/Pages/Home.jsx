import '../assets/CSS/Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <div className="logo">
                    <img src="" alt="Health Log Logo" />
                    <h1>Health Log</h1>
                </div>
                <div className="pesquisa-login">
                    <input type="text" placeholder="Buscar" />
                    <a href="/Login">Login</a>
                    <a href="/registro"> registro</a>
                </div>

                <h2>Escolha um serviço & reserve sua consulta</h2>

            </header>
            
            <section className="conteudo-principal">
                
                
                <div className="review-section">
                    <h3>Avaliações</h3>
                    <div className="review">
                        <p><strong>Emmy Bubble</strong></p>
                        <p>Adorei usar o Health Log para agendar consultas. A interface é intuitiva e os lembretes são muito úteis. Recomendo!</p>
                    </div>
                </div>

                <div className="procedures">
                    <h3>Procedimentos mais buscados</h3>
                    <div className="procedure-card">
                        <h4>Oftalmologia</h4>
                        <p>Profissionais: Dra. Julia, Dr. Sandro</p>
                        <p>Consultório: Clínica A</p>
                        <button>Marcar agendamento</button>
                    </div>
                </div>

                <div className="services">
                    <h3>Serviços disponíveis</h3>
                    <div className="service-item">Medicina</div>
                    <div className="service-item">Odontologia</div>
                    <div className="service-item">Esteticista</div>
                </div>
            </section>

            <footer className="footer">
                <h3>Sobre Nós</h3>
                <p>
                    Health Log é uma plataforma inovadora projetada para simplificar o agendamento de consultas...
                </p>
                <address>
                    R. Direita, 955 - Vila Santo Antônio, Cotia - SP, 06708-280
                </address>
            </footer>
        </div>
    );
}

export default Home;