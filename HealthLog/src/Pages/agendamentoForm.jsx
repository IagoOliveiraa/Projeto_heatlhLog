import { Link } from "react-router";
import "../assets/CSS/home.css";
import { Header } from "../componets/Header";
import { useEffect, useState } from "react";

const retangulos = [
  {
    id: 1,
    nome: "Amor Saúde",
    descricao: "Clínica especializada em cuidados gerais.",
    endereco: "Rua da Saúde, 123, Centro",
    horario: "SEG a SEX: das 8:00 às 22:00",
    fimSemana: "SAB e DOM: das 8:00 às 18:00",
  },
  {
    id: 2,
    nome: "Center Fisio",
    descricao: "Fisioterapia e reabilitação.",
    endereco: "Av. Central, 456, Bairro Novo",
    horario: "SEG a SEX: das 7:00 às 20:00",
    fimSemana: "SAB: das 8:00 às 14:00",
  },
  {
    id: 3,
    nome: "Clínica Psicologia",
    descricao: "Atendimento psicológico especializado.",
    endereco: "Rua das Flores, 789, Jardim das Acácias",
    horario: "SEG a SEX: das 9:00 às 19:00",
    fimSemana: "Fechado",
  },
  {
    id: 4,
    nome: "Clínica Geral",
    descricao: "Consultas e exames gerais.",
    endereco: "Rua da Saúde, 606, Centro",
    horario: "SEG a SEX: das 8:00 às 22:00",
    fimSemana: "SAB e DOM: das 8:00 às 18:00",
  },
  {
    id: 5,
    nome: "Dr. Consulta",
    descricao: "Consultas médicas acessíveis.",
    endereco: "Av. Brasil, 321, Centro",
    horario: "SEG a SEX: das 8:00 às 20:00",
    fimSemana: "SAB: das 9:00 às 15:00",
  },
  {
    id: 6,
    nome: "Estética Pura",
    descricao: "Tratamentos estéticos avançados.",
    endereco: "Rua Bela Vista, 654, Centro",
    horario: "SEG a SEX: das 10:00 às 21:00",
    fimSemana: "SAB e DOM: das 10:00 às 16:00",
  },
  {
    id: 7,
    nome: "Odonto Company",
    descricao: "Odontologia de alta qualidade.",
    endereco: "Rua dos Dentes, 987, Bairro Sorriso",
    horario: "SEG a SEX: das 8:00 às 20:00",
    fimSemana: "SAB: das 8:00 às 14:00",
  },
  {
    id: 8,
    nome: "Propé Saúde",
    descricao: "Serviços de saúde e bem-estar.",
    endereco: "Av. Propé, 159, Jardim Primavera",
    horario: "SEG a SEX: das 7:00 às 19:00",
    fimSemana: "SAB e DOM: das 7:00 às 15:00",
  },
];

function AgendamentoForm() {

    const [clinicas,setClinicas] = useState([])

useEffect(() => {
    fetch(`http://localhost:5000/clinicas`)
    .then((response) =>response.json())
    .then((data) => {
      setClinicas(data) 
      setResults(data)})
    .catch((error) =>alert(error))
}, [])


const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(clinicas);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value == null || value == undefined) {
      setResults(clinicas);
      return;
    }

    const filteredResults = clinicas.filter((item) =>
      item.nomeC.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filteredResults);
  };

  return (
    <div className="container-home">
      <Header/>
      <div>
        <div className="wrapper">
          <div className="grettings">
            <h2>Bem Vindo</h2>
            <p>
              Selecione ou busque por um clinica para realizar o agendamento da
              sua consulta!
            </p>
          </div>
          <input onChange={handleSearch} type="text" placeholder="Buscar por clinica" />
          <div className="card-container">
            {results.map((clinica) => {
              return (
                <div className="retangulo">
                  <div>
                    <h2>{clinica.nomeC}</h2>
                    <p>{clinica.descricao}</p>
                    <p>{clinica.endereco}</p>
                  </div>
                  <div>
                    <p>
                      <strong>Horário de funcionamento:</strong>
                    </p>
                    <p>9h até as 16h</p>
                  </div>
                  <Link
                    to={`clinica/${clinica.idC}`}
                    className="agendar-button"
                    href=""
                  >
                    Agendar
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendamentoForm;