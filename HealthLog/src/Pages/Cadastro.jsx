import React, { useState } from "react";
import "../assets/CSS/cadastro.css";
import imgFundo from "../assets/img/cachFund.jpg";
import maletaCla from "../assets/img/maletaAzulCla.png";
import pers from "../assets/img/persAzulEsc.png";
import logo from "../assets/img/logo.png";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nome || !sobrenome || !email || !senha || !dataNascimento || !confirmarSenha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          sobrenome,
          email,
          senha,
          data_nascimento: dataNascimento,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.message || "Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="login-containerI">
      <img src={imgFundo} alt="" className="background-imageI" />

      <div className="login-boxI">
        <div className="logo-with-imagesI">
          <img src={logo} alt="Imagem 1" className="logoI" />
          <div className="images-containerI">
            <img src={maletaCla} alt="Imagem 1" className="side-imageI" />
            <img src={pers} alt="Imagem 2" className="side-image2I" />
          </div>
        </div>

        <h2>Cadastre-se!</h2>

        <form className="colunasSuculentasI" onSubmit={handleSubmit}>
          <input
            className="input1I"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome.."
            required
          />
          <input
            className="input2I"
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            placeholder="Sobrenome.."
            required
          />
          <input
            className="input3I"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail.."
            required
          />
          <input
            className="input4I"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha.."
            required
          />
          <input
            className="input5I"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            placeholder="Data de nascimento.."
            required
          />
          <input
            className="input6I"
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirmar senha.."
            required
          />
          <div className="divButtonI">
            <button className="buttonI" type="submit">
              Concluir
            </button>
          </div>
        </form>

        <p className="jaLogI">Já tem login? Entrar</p>
      </div>
    </div>
  );
}

export default Cadastro;
