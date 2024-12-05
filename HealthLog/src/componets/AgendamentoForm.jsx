import React, { useState } from "react";
import "../assets/CSS/home.css";
import { Calendario } from "./Calendario";
import { useLocation, useParams } from "react-router";
import { jwtDecode } from "jwt-decode";

const services = [
  { id: "Consulta Regular", label: "Consulta Regular" },
  { id: "Check-up Completo", label: "Check-up Completo" },
  { id: "Retorno", label: "Retorno" },
];

const timeSlots = Array.from({ length: 8 }, (_, i) => {
  const hour = i + 9; // Starting from 9 AM
  return `${hour.toString().padStart(2, "0")}:00`
});

export default function BookingForm() {
  const { id } = useParams();
  const [service, setService] = useState("");
  const [time, setTime] = useState("");
  const [diaSelecionado, setDiaSelecionado] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token")
    const decodetoken = jwtDecode(token)
    console.log(decodetoken.id)   

    const [horas, minutos] = time.split(":");
    diaSelecionado.setHours(Number(horas), Number(minutos), 0, 0);
    const dataFormatada = new Date(
      diaSelecionado.getTime() - diaSelecionado.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    try {
      const response = await fetch("http://localhost:5000/agendamento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          especialidade: service,
          idClinica: id,
          idClient: String(decodetoken.id),
          dia: dataFormatada,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Exibe "Usuário registrado com sucesso!"
      } else {
        alert(data.message); // Exibe mensagens de erro
      }
    } catch (error) {
      console.error("Erro ao fazer agendamento:", error);
      alert("Erro ao fazer agedamento. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="form-content">
      <div className="calender-content">
        <Calendario
          diaSelecionado={diaSelecionado}
          setDiaSelecionado={setDiaSelecionado}
        />
      </div>
      <div className="booking-content">
        <div className="booking-card">
          <h2>Agendar Consulta</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Tipo de Serviço</label>
              <div className="radio-group">
                <select
                  name=""
                  id=""
                  className="time-picker"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                >
                  {services.map((svc) => (
                    <option key={svc.label} value={svc.id}>
                      {svc.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="time">Horário</label>
              <select
                id="time"
                className="time-picker"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Selecione um horário</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="button"
              disabled={!service || !time || !diaSelecionado}
            >
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}