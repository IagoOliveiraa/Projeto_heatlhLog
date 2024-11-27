
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser } from "react-icons/fa6";
import { SlArrowDown, SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import amorsaude from "../assets/amorsaude.jpg";
import Centerfisio from "../assets/Centerfisio.jpg";
import clinicapsicologia from "../assets/clinicapsicologia.webp";
import ClinicasImg from '../assets/img/Clinicas.png';
import Drconsulta from "../assets/Dr.consulta.webp";
import estetica from "../assets/estetica.webp";
import odontocompany from "../assets/odonto company.jpg";
import prope from "../assets/propé.webp";
import linhapontilhada from "../assets/Linhapontilhada.png"; 
 import "../CSS/ClinicaPertodevoce.css";
 import logoh from '../assets/img/Logo1.png';
import barraazulfinal from '../assets/img/barraazulfinal.png';

function Clinica() {
  const [busca, setBusca] = useState("");
  const [indiceAtualSuperior, setIndiceAtualSuperior] = useState(0);
  const [indiceAtualInferior, setIndiceAtualInferior] = useState(0);
  const navegar = useNavigate();

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter" && busca) {
      navegar(`/pesquisa/${busca}`);
    }
  };

  const avancarSuperior = () => {
    setIndiceAtualSuperior((prevIndice) => (prevIndice + 2) % retangulos.length);
  };

  const voltarSuperior = () => {
    setIndiceAtualSuperior((prevIndice) => (prevIndice - 2 + retangulos.length) % retangulos.length);
  };

  const avancarInferior = () => {
    setIndiceAtualInferior((prevIndice) => (prevIndice + 2) % retangulos.length);
  };

  const voltarInferior = () => {
    setIndiceAtualInferior((prevIndice) => (prevIndice - 2 + retangulos.length) % retangulos.length);
  };

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
      descricao: "Fisioterapia e reabilitação.",
      endereco: "Av. Central, 456, Bairro Novo",
      horario: "SEG a SEX: das 7:00 às 20:00",
      fimSemana: "SAB: das 8:00 às 14:00",
    },
    {
      imagem: clinicapsicologia,
      nome: "Clínica Psicologia",
      descricao: "Atendimento psicológico especializado.",
      endereco: "Rua das Flores, 789, Jardim das Acácias",
      horario: "SEG a SEX: das 9:00 às 19:00",
      fimSemana: "Fechado",
    },
    {
      imagem: ClinicasImg,
      nome: "Clínica Geral",
      descricao: "Consultas e exames gerais.",
      endereco: "Rua da Saúde, 606, Centro",
      horario: "SEG a SEX: das 8:00 às 22:00",
      fimSemana: "SAB e DOM: das 8:00 às 18:00",
    },
    {
      imagem: Drconsulta,
      nome: "Dr. Consulta",
      descricao: "Consultas médicas acessíveis.",
      endereco: "Av. Brasil, 321, Centro",
      horario: "SEG a SEX: das 8:00 às 20:00",
      fimSemana: "SAB: das 9:00 às 15:00",
    },
    {
      imagem: estetica,
      nome: "Estética Pura",
      descricao: "Tratamentos estéticos avançados.",
      endereco: "Rua Bela Vista, 654, Centro",
      horario: "SEG a SEX: das 10:00 às 21:00",
      fimSemana: "SAB e DOM: das 10:00 às 16:00",
    },
    {
      imagem: odontocompany,
      nome: "Odonto Company",
      descricao: "Odontologia de alta qualidade.",
      endereco: "Rua dos Dentes, 987, Bairro Sorriso",
      horario: "SEG a SEX: das 8:00 às 20:00",
      fimSemana: "SAB: das 8:00 às 14:00",
    },
    {
      imagem: prope,
      nome: "Propé Saúde",
      descricao: "Serviços de saúde e bem-estar.",
      endereco: "Av. Propé, 159, Jardim Primavera",
      horario: "SEG a SEX: das 7:00 às 19:00",
      fimSemana: "SAB e DOM: das 7:00 às 15:00",
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
            <SlArrowDown className="icone-seta" />
          </p>
          <div className="divmenu">
            <a href="/EspecialidadesMedicas">Medicina</a>
            <a href="/EspecialidadesOdontologicas">Odontologia</a>
            <a href="/EspecialidadesEsteticas">Estética</a>
          </div>
        </div>
        <FaRegCircleUser className="icone-perfil" onClick={irParaPerfil} />
      </div>

      {/* Títulos das clínicas */}
      <div className="clinicas-titles">
        <div className="texto-clinicas">
          <h1>Clínicas perto de você</h1>
        </div>
      </div>

      <div className="retangulos-container">
        {/* Primeira linha de retângulos */}
        <div className="linha-retangulos">
          <div className="retangulo" onClick={irParaPerfil}>
            <img src={retangulos[indiceAtualSuperior].imagem} alt={retangulos[indiceAtualSuperior].nome} className="imagem-retangulo" />
            <h2>{retangulos[indiceAtualSuperior].nome}</h2>
            <p>{retangulos[indiceAtualSuperior].descricao}</p>
            <p>{retangulos[indiceAtualSuperior].endereco}</p>
            <p><strong>Horário de funcionamento:</strong></p>
            <p>{retangulos[indiceAtualSuperior].horario}</p>
            <p>{retangulos[indiceAtualSuperior].fimSemana}</p>
          </div>

          <div className="retangulo" onClick={irParaPerfil}>
            <img src={retangulos[(indiceAtualSuperior + 1) % retangulos.length].imagem} alt={retangulos[(indiceAtualSuperior + 1) % retangulos.length].nome} className="imagem-retangulo" />
            <h2>{retangulos[(indiceAtualSuperior + 1) % retangulos.length].nome}</h2>
            <p>{retangulos[(indiceAtualSuperior + 1) % retangulos.length].descricao}</p>
            <p>{retangulos[(indiceAtualSuperior + 1) % retangulos.length].endereco}</p>
            <p><strong>Horário de funcionamento:</strong></p>
            <p>{retangulos[(indiceAtualSuperior + 1) % retangulos.length].horario}</p>
            <p>{retangulos[(indiceAtualSuperior + 1) % retangulos.length].fimSemana}</p>
          </div>
        </div>

        {/* Setas de navegação acima da linha pontilhada */}
        <div className="setas-de-cima">
          <SlArrowLeft className="icone-seta-lateral" onClick={voltarSuperior} />
          <SlArrowRight className="icone-seta-lateral" onClick={avancarSuperior} />
        </div>

        {/* Títulos das clínicas em geral */}
        <div className="clinicas-titles">
          <div className="texto-clinicas" style={{ marginTop: "-150px" }}>
            <h1>Clínicas em geral</h1>
          </div>
        </div>

        {/* Linha pontilhada entre as duas linhas de retângulos */}
        <div className="linha-pontilhada"  style={{ marginTop: "-150px" }}>
          <img src={linhapontilhada} alt="Linha Pontilhada" className="imagem-linha" />
        </div>

        {/* Segunda linha de retângulos */}
        <div className="linha-retangulos">
          <div className="retangulo" onClick={irParaPerfil}>
            <img src={retangulos[indiceAtualInferior + 4].imagem} alt={retangulos[indiceAtualInferior + 4].nome} className="imagem-retangulo" />
            <h2>{retangulos[indiceAtualInferior + 4].nome}</h2>
            <p>{retangulos[indiceAtualInferior + 4].descricao}</p>
            <p>{retangulos[indiceAtualInferior + 4].endereco}</p>
            <p><strong>Horário de funcionamento:</strong></p>
            <p>{retangulos[indiceAtualInferior + 4].horario}</p>
            <p>{retangulos[indiceAtualInferior + 4].fimSemana}</p>
          </div>

          <div className="retangulo" onClick={irParaPerfil}>
            <img src={retangulos[indiceAtualInferior + 5].imagem} alt={retangulos[indiceAtualInferior + 5].nome} className="imagem-retangulo" />
            <h2>{retangulos[indiceAtualInferior + 5].nome}</h2>
            <p>{retangulos[indiceAtualInferior + 5].descricao}</p>
            <p>{retangulos[indiceAtualInferior + 5].endereco}</p>
            <p><strong>Horário de funcionamento:</strong></p>
            <p>{retangulos[indiceAtualInferior + 5].horario}</p>
            <p>{retangulos[indiceAtualInferior + 5].fimSemana}</p>
          </div>
        </div>

        {/* Setas de navegação abaixo da linha pontilhada */}
        <div className="setas-de-baixo">
          <SlArrowLeft className="icone-seta-lateral" onClick={voltarInferior} />
          <SlArrowRight className="icone-seta-lateral" onClick={avancarInferior} />
        </div>
      </div>

      {/* Barra azul na parte inferior do site */}
      <div className="barra-inferior">
        <img src={barraazulfinal} alt="Barra Azul" className="imagem-barra" />
      </div>
    </>
  );
}

export default Clinica;
