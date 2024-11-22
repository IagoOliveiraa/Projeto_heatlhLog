
import { Link } from "react-router-dom"; // Importa o Link do React Router
import imagem200 from '../assets/img/grafico200.png';
import imagem89 from '../assets/img/grafico89.png';
import imagemhealthlog from '../assets/img/helthloggrafico.png';
import imagemmuitomais from '../assets/img/graficomuitomais.png';
import logoh from '../assets/img/Logo1.png';
import { FaSearch } from 'react-icons/fa';
import '../assets/CSS/EspecialidadesEsteticas.css';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";

function EspecialidadesEsteticas() {
  const [busca, setBusca] = useState("");
  const navegar = useNavigate();

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  return (
    <div className="containerAA">
      {/* Barra de navegação */}
      <div className="barraAA">
        <img src={logoh} alt="Logo" className="logoAA" />
        <div className="barra-pesquisaAA">
          <FaSearch className="icone-pesquisaAA" />
          <input
            type="text"
            placeholder="Buscar"
            className="input-pesquisaAA"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onKeyPress={pesquisar}
          />
        </div>
        <div className="containerservicosAA">
          <p className="divservicosAA">
            Serviços <SlArrowDown className="icone-setaAA" />
          </p>
        </div>
        <FaRegCircleUser className="icone-perfilAA" onClick={irParaPerfil} />
      </div>

      {/* Imagens no topo */}
      <div className="graficoAA">
        <img src={imagem200} alt="Grafico 200" />
        <img src={imagem89} alt="Grafico 89" />
        <img src={imagemhealthlog} alt="Grafico Health Log" />
        <img src={imagemmuitomais} alt="Grafico Muito Mais" />
      </div>

      {/* Título da seção */}
      <div className="titulo2AA">
        <h1>Especialidades Estéticas</h1>
      </div>

      {/* Grid das especialidades estéticas */}
      <div className="todas-caixas2AA">
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Cirurgia Plástica</h2>
          <p>Procedimentos cirúrgicos que aprimoram a aparência física, como rinoplastia, lifting facial, e lipoaspiração.</p>
        </Link>
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Dermatologia Estética</h2>
          <p>Tratamentos de pele que visam melhorar a aparência, como preenchimentos faciais, botox, e peelings químicos.</p>
        </Link>
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Odontologia Estética</h2>
          <p>Foca na melhoria dos dentes e do sorriso através de clareamento, facetas e aparelhos ortodônticos.</p>
        </Link>
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Tricologia Estética</h2>
          <p>Tratamentos para cabelos e couro cabeludo, como transplante capilar e tratamentos contra queda de cabelo.</p>
        </Link>
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Nutrição Estética</h2>
          <p>Planejamento alimentar para melhorar a aparência da pele, cabelo e unhas, mantendo um peso saudável.</p>
        </Link>
        <Link to="/ClinicasPertoDeVoce" className="caixa2AA">
          <h2>Estética Corporal</h2>
          <p>Procedimentos não invasivos para modelagem do corpo, como massagem modeladora e drenagem linfática.</p>
        </Link>
      </div>
    </div>
  );
}

export default EspecialidadesEsteticas;
