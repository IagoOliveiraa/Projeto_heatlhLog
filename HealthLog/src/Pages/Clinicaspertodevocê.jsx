import "../CSS/ClinicaPertodevoce.css";
import logoh from "../assets/Logo1.png";
import { FaSearch } from 'react-icons/fa'; 
import { FaRegCircleUser } from "react-icons/fa6"; 
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import amorsaude from "../assets/amorsaude.jpg";
import Centerfisio from "../assets/Centerfisio.jpg";
import clinicapsicologia from "../assets/clinicapsicologia.webp";
import Clinicas from "../assets/Clinicas.png";
import Drconsulta from "../assets/Dr.consulta.webp";
import estetica from "../assets/estetica.webp";
import odontocompany from "../assets/odonto company.jpg";
import prope from "../assets/propé.webp";

function Clinica() {
  const [busca, setBusca] = useState(""); 
  const [indiceAtual, setIndiceAtual] = useState(0); // Controla os retângulos visíveis
  const navegar = useNavigate(); 

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/pesquisa/${busca}`);
    }
  };

  // Funções para controlar a mudança de retângulos
  const avancar = () => {
    setIndiceAtual((prevIndice) => (prevIndice + 4) % 9); // Avança 4 índices por vez
  };

  const voltar = () => {
    setIndiceAtual((prevIndice) => (prevIndice - 4 + 9) % 9); // Retrocede 4 índices
  };

  // Lista de retângulos a serem exibidos
  const retangulos = [
    {
      imagem: amorsaude,
      nome: "Amor Saúde",
      descricao: "Clínica especializada em cuidados gerais.",
      endereco: "Rua da Saúde, 123, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: Centerfisio,
      nome: "Center Fisio",
      descricao: "Centro especializado em fisioterapia.",
      endereco: "Avenida das Nações, 456, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: clinicapsicologia,
      nome: "Clínica Psicologia",
      descricao: "Atendimento psicológico especializado.",
      endereco: "Rua das Flores, 789, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: Clinicas,
      nome: "Clínicas Médicas",
      descricao: "Diversos serviços médicos à disposição.",
      endereco: "Avenida dos Médicos, 101, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: Drconsulta,
      nome: "Dr. Consulta",
      descricao: "Atendimento médico de qualidade.",
      endereco: "Rua da Esperança, 202, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: estetica,
      nome: "Estética Completa",
      descricao: "Serviços estéticos e tratamentos de beleza.",
      endereco: "Rua da Beleza, 303, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: odontocompany,
      nome: "Odonto Company",
      descricao: "Serviços odontológicos completos.",
      endereco: "Avenida do Sorriso, 404, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: prope,
      nome: "Propé Podologia",
      descricao: "Tratamentos especializados para os pés.",
      endereco: "Rua do Conforto, 505, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: Clinicas,
      nome: "Clínica Geral",
      descricao: "Consultas e exames gerais.",
      endereco: "Rua da Saúde, 606, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
  ];

  return (
    <>
      <div className="barra">
        <img src={logoh} alt="Logo" className="logo" />
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
            <SlArrowDown className="icone-seta" onClick={() => console.log("Seta clicada")} />
          </p>
          <div className="divmenu">
            <a href="/EspecialidadesMedicas">Medicina</a>
            <a href="#">Odontologia</a>
            <a href="#">Estética</a>
          </div>
        </div>
        <FaRegCircleUser className="icone-perfil" onClick={irParaPerfil} />
      </div>

      <div className="texto-clinicas">
        <h1>Clínicas perto de você</h1>
      </div>

      <div className="setas-laterais">
        <SlArrowLeft className="icone-seta-lateral" onClick={voltar} />
        <SlArrowRight className="icone-seta-lateral" onClick={avancar} />
      </div>

      <div className="retangulos-container">
        <div className="linha-retangulos">
          <div className="retangulo">
            <img src={retangulos[indiceAtual].imagem} alt={retangulos[indiceAtual].nome} className="imagem-retangulo" />
            <h2 style={{ textAlign: 'left' }}>{retangulos[indiceAtual].nome}</h2>
            <p style={{ textAlign: 'left' }}>{retangulos[indiceAtual].descricao}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[indiceAtual].endereco}</p>
            <p style={{ textAlign: 'left' }}><strong>Horário de funcionamento:</strong> {retangulos[indiceAtual].horario}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[indiceAtual].fimSemana}</p>
          </div>
          <div className="retangulo">
            <img src={retangulos[(indiceAtual + 1) % 9].imagem} alt={retangulos[(indiceAtual + 1) % 9].nome} className="imagem-retangulo" />
            <h2 style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 1) % 9].nome}</h2>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 1) % 9].descricao}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 1) % 9].endereco}</p>
            <p style={{ textAlign: 'left' }}><strong>Horário de funcionamento:</strong> {retangulos[(indiceAtual + 1) % 9].horario}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 1) % 9].fimSemana}</p>
          </div>
        </div>

        <div className="linha-retangulos">
          <div className="retangulo">
            <img src={retangulos[(indiceAtual + 2) % 9].imagem} alt={retangulos[(indiceAtual + 2) % 9].nome} className="imagem-retangulo" />
            <h2 style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 2) % 9].nome}</h2>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 2) % 9].descricao}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 2) % 9].endereco}</p>
            <p style={{ textAlign: 'left' }}><strong>Horário de funcionamento:</strong> {retangulos[(indiceAtual + 2) % 9].horario}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 2) % 9].fimSemana}</p>
          </div>
          <div className="retangulo">
            <img src={retangulos[(indiceAtual + 3) % 9].imagem} alt={retangulos[(indiceAtual + 3) % 9].nome} className="imagem-retangulo" />
            <h2 style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 3) % 9].nome}</h2>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 3) % 9].descricao}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 3) % 9].endereco}</p>
            <p style={{ textAlign: 'left' }}><strong>Horário de funcionamento:</strong> {retangulos[(indiceAtual + 3) % 9].horario}</p>
            <p style={{ textAlign: 'left' }}>{retangulos[(indiceAtual + 3) % 9].fimSemana}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clinica;
