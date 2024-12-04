import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/CSS/agendamento.css';
import logoh from '../assets/img/Logo1.png';
import logoh2 from '../assets/img/Logo2.png'
import { FaSearch } from 'react-icons/fa';
import { FaRegCircleUser  } from 'react-icons/fa6';
import { SlArrowDown } from 'react-icons/sl';
import { AnimatePresence, motion } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';

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
  const [selectedDate, setSelectedDate] = useState(null);

  const mudarMes = (incremento) => {
    const novoMes = data.getMonth() + incremento;
    setData(new Date(data.getFullYear(), novoMes, 1));
    setDiaSelecionado(null); // Reseta o dia selecionado ao mudar de mês
  };

  const handleClick = (date) => {
    setDiaSelecionado(date);
    setSelectedDate(date);
  };

  const handleClose = () => {
    setSelectedDate(null);
  };

  // Simulando dados de horários para cada dia
  const calendarData = Array.from({ length: 31 }, (_, i) => ({
    date: (i + 1).toString(),
    hours: Array.from({ length: 3 }, (_, j) => ({
      time: `${8 + j}:00`,
      available: true
    }))
  }));

  const horariosDoDia = selectedDate ? calendarData.find(data => data.date === String(selectedDate)).hours : [];

  return (
    <div className="calendario">
      <div className="cabecalho">
        <button onClick={() => mudarMes(-1)}>{"<"}</button>
        <h2>{meses[data.getMonth()]} {data.getFullYear()}</h2>
        <button onClick={() => mudarMes(1)}>{">"}</button>
      </div>
      <div className="dias dias-semana">
        {["D", "S", "T", "Q", "Q", "S", "S"].map((dia, index) => (
          <div key={index} className="dia nome-dia">{dia}</div>
        ))}
        {gerarDias(data.getFullYear(), data.getMonth(), diaSelecionado, handleClick)}
      </div>
      {selectedDate && (
        <div className="popup">
          <h2>Horários para o dia {selectedDate}</h2>
          <ul>
            {horariosDoDia.map(hour => (
              <li key={hour.time}>
                {hour.time} - {hour.available ? 'Disponível' : 'Indisponível'}
              </li>
            ))}
          </ul>
          <button onClick={handleClose}>Fechar</button>
        </div>
      )}
    </div>
  );
};

function ClinicaCalendario() {
  const [busca, setBusca] = useState("");
  const [isOpen, setOpen] = useState(false);
  const navegar = useNavigate();

  const irParaPerfil = () => {
    navegar("/perfil");
  };

  const pesquisar = (evento) => {
    if (evento.key === "Enter") {
      navegar(`/ pesquisa/${busca}`);
    }
  };

  const routes = [
    { title: "Odontologia", href: "/EspecialidadesOdontologicas" },
    { title: "Estetica", href: "/EspecialidadesEsteticas" },
    { title: "Medicina", href: "/EspecialidadesMedicas" },
    { title: "Perfil", href: "/Perfil" },
  ];

  return (
    <div className="clinica-calendario">
      <div className="barra">
        <Link to="/Home"><img src={logoh} alt="Logo" className="logo" /></Link>
        <Link to = '/Home'><img src={logoh2} className='logo2' /></Link>
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
        </div>
        <FaRegCircleUser  className="icone-perfil" onClick={irParaPerfil} />
        <div className="hamburger-menu">
          <Hamburger toggled={isOpen} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="itens-do-menu"
              >
                <ul className="flex-col">
                  {routes.map((route) => (
                    <li key={route.title}>
                      <Link
                        to={route.href}
                        className="letras-da-box"
                        onClick={() => setOpen(false)} // Fecha o menu ao clicar em um link
                      >
                        {route.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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