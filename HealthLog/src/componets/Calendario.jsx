import { useState } from "react";

const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
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
      <button
        key={i}
        className={`dia ${diaSelecionado?.getDate() === i ? "clicado" : ""}`}
        onClick={() => setDiaSelecionado(new Date(ano, mes, i))}
      >
        {i}
      </button>
    );
  }
  return dias;
}

export const Calendario = ({ diaSelecionado, setDiaSelecionado }) => {
  const [data, setData] = useState(new Date());

  const mudarMes = (incremento) => {
    const novoMes = data.getMonth() + incremento;
    setData(new Date(data.getFullYear(), novoMes, 1));
    setDiaSelecionado(null); // Reseta o dia selecionado ao mudar de mês
  };

  return (
    <div className="calendario">
      <div className="cabecalho">
        <button onClick={() => mudarMes(-1)}>{"<"}</button>
        <h2>
          {meses[data.getMonth()]} {data.getFullYear()}
        </h2>
        <button onClick={() => mudarMes(1)}>{">"}</button>
      </div>
      <div className="dias dias-semana">
        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia) => (
          <div key={dia} className="dia nome-dia">
            {dia}
          </div>
        ))}
        {gerarDias(
          data.getFullYear(),
          data.getMonth(),
          diaSelecionado,
          setDiaSelecionado
        )}
      </div>
    </div>
  );
};