import '../CSS/Home.css';

function Home() {
    return (
        <div className="home-container">

            <header className="cabeçalho">

                <div className="logo">
                    <img src="" alt="Health Log Logo" />
                    <h1>Health Log</h1>
                </div>

                <div className="pesquisa-login">
                    <input type="text" placeholder="Buscar" />
                    <a href="/Login">Login</a>
                    <a href="/registro"> Cadastra-se</a>
                    
                </div>

                <div className="boas-Vindas">
                    <h2>Escolha um serviço & reserve sua consulta</h2>
                </div>

               

            </header>
            
            <section className="conteudo-principal">
                
                
                <div className="review-section">

                    <h3>Avaliações</h3>

                    <div className="review">
                        <p><strong>Emmy Bubble</strong></p>
                        <p>Adorei usar o Health Log para agendar consultas. A interface é intuitiva e os lembretes são muito úteis. Recomendo!</p>
                    </div>

                </div>

                <div className="procedimentos">

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

                         <div className="service-items">

                            <a href="/EspecialidadesMedicas"><div className="service-item">Medicina</div></a>
                            <a href="/EspecialidadesOdontologicas"><div className="service-item">Odontologia</div></a> 
                            <a href="/EspecialidadesEsteticas"><div className="service-item">Esteticista</div></a>

                         </div>

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