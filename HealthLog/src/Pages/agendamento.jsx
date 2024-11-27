import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/agendamento.css';
import logoh from '../assets/img/Logo1.png';
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser  } from 'react-icons/fa6';
import { SlArrowDown } from 'react-icons/sl';

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const gerarDias = (ano, mes, diaSelecionado, setDiaSelecionado) => {
  const diasNoMes = new Date(ano, mes + 1, 0).getDate();
  const primeiroDia = new Date(ano, mes, 1).getDay();
  const dias = [];

  for (let i = 0; i < primeiroDia; i++) {
    dias.push(<div key={`empty-${i}`} className="dia vazio"></div>);
  }

  for (let i = 1; i <= diasNoMes; i++) {
    dias.push(
      <button key={i} className={`dia ${diaSelecionado === i ? 'clicado' : ''}`} onClick={() => setDiaSelecionado(i)}>
        {i}
      </button>
    );
  }
  return dias;
};

const Calendario = () => {
  const [data, setData] = useState(new Date());
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  const mudarMes = (incremento) => {
    const novoMes = data.getMonth() + incremento;
    setData(new Date(data.getFullYear(), novoMes, 1));
    setDiaSelecionado(null); // Reseta o dia selecionado ao mudar de mês
  };

  return (
    <div className="calendario">
      <div className="cabecalho">
        <button onClick={() => mudarMes(-1)}>{"<"}</button>
        <h2>{meses[data.getMonth()]} {data.getFullYear()}</h2>
        <button onClick={() => mudarMes(1)}>{">"}</button>
      </div>
      <div className="dias dias-semana">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(dia => (
          <div key={dia} className="dia nome-dia">{dia}</div>
        ))}
        {gerarDias(data.getFullYear(), data.getMonth(), diaSelecionado, setDiaSelecionado)}
      </div>
    </div>
  );
};

function ClinicaCalendario() {
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

  const handleClick = () => {
    alert('Botão clicado!'); // Ação do botão
  };

  return (
    <div className="clinica-calendario">
      <div className="barra">
        <Link to="/Home"><img src={logoh} alt="Logo" className="logo" /></Link>
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
          <p className="divservicos">Serviços <SlArrowDown className="icone-seta" /></p>
          <div className="divmenu">
            <a href="/EspecialidadesMedicas">Medicina</a>
            <a href="#">Odontologia</a>
            <a href="#">Estética</a>
          </div>
        </div>
        <FaRegCircleUser  className="icone-perfil" onClick={irParaPerfil} />
      </div>
      <div className='botãoCalen'>
      <Calendario />
      <button className="botao-agendar">
           Agendar Consulta
      </button>
      </div>
    </div>
  );
}

export default ClinicaCalendario;