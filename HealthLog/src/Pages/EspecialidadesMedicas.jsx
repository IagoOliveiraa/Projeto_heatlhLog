// JavaScript (React Component)
import "../CSS/EspecialidadesMedicas.css";
import { Link } from "react-router-dom"; // Importa o Link do React Router
import imagem200 from "../assets/img/grafico200.png";
import imagem89 from "../assets/img/grafico89.png";
import imagemhealthlog from "../assets/img/helthloggrafico.png";
import imagemmuitomais from "../assets/img/graficomuitomais.png";
import logoh from "../assets/img/Logo1.png";
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EspecialidadesMedicas() {
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
        <div className="containerBB">
            <div className="barraBB">
                <img src={logoh} alt="Logo" className="logoBB" />
                <div className="barra-pesquisaBB">
                    <FaSearch className="icone-pesquisaBB" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="input-pesquisaBB"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        onKeyPress={pesquisar}
                    />
                </div>
                <div className="containerservicosBB">
                    <p className="divservicosBB">
                        Serviços
                        <SlArrowDown className="icone-setaBB" />
                    </p>
                </div>
                <FaRegCircleUser className="icone-perfilBB" onClick={irParaPerfil} />
            </div>
            <div className="graficoBB">
                <img src={imagem200} alt="grafico200" />
                <img src={imagem89} alt="grafico89" />
                <img src={imagemhealthlog} alt="graficohealthlog" />
                <img src={imagemmuitomais} alt="graficomuitomais" />
            </div>

            <div className="titulo2BB">
                <h1>Especialidades Médicas</h1>
            </div>

            <div className="todas-caixas2BB">
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Cardiologia</h2>
                    <p>Especialidade voltada aos cuidados com o coração e complicações cardiacas</p>
                </Link>
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Ortopedia</h2>
                    <p>Especialidade voltada para a saúde e cuidados com a região do pé e tornozelo</p>
                </Link>
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Neurologia</h2>
                    <p>Especialidade que diagnostica e trata distúrbios do sistema nervoso, incluindo o cérebro, medula espinhal e nervos</p>
                </Link>
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Pediatria</h2>
                    <p>Especialidade que volta a atenção para o bem-estar de crianças e adolescentes</p>
                </Link>
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Dermatologia</h2>
                    <p>Especialidade diagnostica e trata doenças da pele, cabelos, unhas e mucosas</p>
                </Link>
                <Link to="/ClinicasPertoDeVoce" className="caixa2BB">
                    <h2>Clínico Geral</h2>
                    <p>Especialidade que faz diagnósticos iniciais, trata condições comuns e encaminha pacientes para especialistas quando necessário</p>
                </Link>
            </div>
        </div>
    );
}

export default EspecialidadesMedicas;
