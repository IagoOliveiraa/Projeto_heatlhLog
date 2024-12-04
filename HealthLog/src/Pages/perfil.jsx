import React, { useState, useEffect } from "react";
import "../assets/CSS/perfil.css";
import tulipa from "../assets/img/fotopf.png";
import LogoPerfil from "../assets/img/Logo1.png";

export default function Perfil() {
  const [user, setUser] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    data_nascimento: "",
  });

  useEffect(() => {
    fetch("http://localhost:5000/usuario")
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

  return (
    <>
      {/* Cabeçalho */}
      <section className="naveBarBlueUM">
        <div className="LogoHealthImgUM">
          <a href="/">
            <img src={LogoPerfil} alt="Foto Logo" />
          </a>
        </div>
      </section>

      {/* Container principal */}
      <div className="form-containerUM">
        {/* Coluna da Imagem */}
        <div className="tuliImgUM">
          <div className="ipaImgUM">
            <img src={tulipa} alt="Foto de perfil" />
          </div>
          <div className="containerButtonUM">
            <a href="/">
              <button className="btn excluirUM">Excluir</button>
            </a>
            <a href="/">
              <button className="btn editarUM">Editar</button>
            </a>
          </div>
        </div>

        {/* Formulário */}
        <div className="formDivUM">
          <div className="perfil-formUM">
            <div className="form-groupUM">
              <div className="inputContainerUM" id="input-perfil">
                <label>Nome</label>
                <input type="text" value={user.nome} disabled />
              </div>

              <div className="inputContainerUM" id="input-perfil">
                <label>Sobrenome</label>
                <input type="text" value={user.sobrenome} disabled />
              </div>

              <div className="inputContainerUM" id="input-perfil">
                <label>E-mail</label>
                <input type="text" value={user.email} disabled />
              </div>

              <div className="inputContainerUM">
                <label>Data de Nascimento</label>
                <input type="date" value={user.data_nascimento} disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
