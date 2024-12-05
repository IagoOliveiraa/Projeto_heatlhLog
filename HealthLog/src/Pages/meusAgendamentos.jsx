import { Link } from "react-router";
import { Header } from "../componets/Header";  
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {format} from 'date-fns';
import {ptBR} from "date-fns/locale"

export function UserAgedamentos() {
    const token = localStorage.getItem("token")
    const decodetoken = jwtDecode(token)
    console.log(decodetoken.id)   
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/perfil/${decodetoken.id}`)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Erro ao buscar dados do perfil: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            console.log("Dados do usuário:", data); // Log para verificar os dados recebidos
            setUser(data); // Atualiza o estado com os dados do usuário
          })
          .catch((err) => {
            console.error("Erro ao buscar dados do perfil:", err);
          });
      }, []);


      const data = new Date();
const dataFormatada = data.toLocaleString('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'short'
});
    

  return (
    <div>
      <Header />
      <main className="wrapper">
        <div className="card">
          <div className="content">
            <div className="avatar">JH</div>
            <div className="info">
              <h2 className="name">{user.nome}</h2>
              <p className="detail">Email: {user.email}</p>
            </div>
          </div>
        </div>
        <h1>Meus agendamentos</h1>
        <div className="card-container">
          {user?.agendamentos?.map((clinica) => {
            return (
              <div className="retangulo">
                <div>
                  <h2>{clinica?.clinicaNome}</h2>
                    <p>{clinica?.descricao}</p>
                </div>
                <div>
                  <p>
                    <strong>Horário</strong>
                  </p>
                  <p>{format(clinica.data, "dd/MM/yyyy HH:mm", {locale: ptBR})}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}