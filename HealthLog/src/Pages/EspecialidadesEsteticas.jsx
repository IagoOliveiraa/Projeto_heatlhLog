import "../CSS/EspecialidadesEsteticas.css";
import imagem200 from "../assets/grafico200.png";//importando imagem do gráfico
import imagem89 from "../assets/grafico89.png";//importando imagem do gráfico
import imagemhealthlog from "../assets/helthloggrafico.png";//importando imagem do gráfico
import imagemmuitomais from "../assets/graficomuitomais.png";//importando imagem do gráfico

function EspecialidadesEsteticas() {
    return (
        <div className="Estetica-container">
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


            </header>

            <section className="conteudo-principal">

                <div className="grafico">
                    <img src={imagem200} alt="grafico200" />
                    <img src={imagem89} alt="grafico89" />
                    <img src={imagemhealthlog} alt="graficohealthlog" />
                    <img src={imagemmuitomais} alt="graficomuitomais" />

                </div>

                <div className="titulo">
                    <h1>Especialidades Estéticas</h1>
                </div>

                <div className="container">
                    <div className="box">
                        <h3> Cirurgia <br /> Plástica <br /> </h3>
                        <h4> Procedimentos cirúrgicos que modificam ou aprimoram a aparência física, como rinoplastia, lifting facial, e lipoaspiração</h4>

                    </div>
                </div>

                <div className="container">
                    <div className="box">
                        <h3>Dermatologia <br /> Estética <br /> </h3>
                        <h4>Tratamentos de pele que visam melhorar a aparência, como preenchimentos faciais, botox, e peelings químicos</h4>

                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Odontologia<br /> Estética <br /> </h3>
                        <h4>Foca na melhoria da aparência dos dentes e do sorriso através de procedimentos como clareamento dental, facetas e aparelhos ortodônticos</h4>

                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Tricologia <br /> Estética <br /> </h3>
                        <h4>Tratamentos para cabelos e couro cabeludo, incluindo transplante capilar, tratamentos contra queda de cabelo e cuidados estéticos capilares</h4>

                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Nutrição <br /> Estética<br /> </h3>
                        <h4>Planejamento alimentar voltado para a melhoria da aparência da pele, cabelo e unhas, além de manutenção de um peso saudável</h4>

                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Estética <br /> Corporal<br /> </h3>
                        <h4>Procedimentos não invasivos para modelagem do corpo, como massagem modeladora, drenagem linfática e tratamentos de celulite</h4>

                    </div>
                </div>



            </section>



        </div>
    )
}


export default EspecialidadesEsteticas;
