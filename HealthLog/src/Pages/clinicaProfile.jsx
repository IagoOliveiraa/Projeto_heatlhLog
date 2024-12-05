import { data, useParams } from "react-router";
import "../assets/CSS/cpdv.css";
import BookingForm from "../componets/AgendamentoForm";
import '../assets/CSS/agendamento.css';

import { Header } from "../componets/Header";

import { useEffect, useState } from "react";

function ClinicaProfile() {
const [clinica,setClinica] = useState({})
    const {id} = useParams()
    useEffect(() => {
    fetch(`http://localhost:5000/clinicas/${id}`)
    .then((response) =>response.json())
    .then((data) =>setClinica(data))
    .catch((error) =>alert(error))

}, [])

  return (
    <>
      <div className="containerCpdvB">
        <Header />
        <div className="wrapper">
          <h1>{clinica.nomeC}</h1>
          <h3 className="descricaoB">
          Selecione a data e agende sua consulta
          </h3>
          <BookingForm />
        </div>
      </div>
    </>
  );
}

export default ClinicaProfile;