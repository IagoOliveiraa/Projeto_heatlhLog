import React, { useState } from "react";
import "../assets/CSS/cadastro.css"; // Certifique-se de que o caminho está correto.
import imgFundo from "../assets/img/cachFund.jpg"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // Primeira imagem a ser usada
import pers from "../assets/img/persAzulEsc.png"; // segunda imagem a ser usada
import logo from "../assets/img/logo.png";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (email === "exemplo@teste.com" && password === "123456") {
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="login-containerI">
      <img src={imgFundo} alt="" className="background-imageI" />{" "}
      {/* Imagem de fundo diretamente aqui */}
      <div className="login-boxI">
        {/* Aqui está o logo HL com as imagens lado a lado */}
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nome.."
            required
          />
          <input
            className="input2I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sobrenome.."
            required
          />
          <input
            className="input3I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="E-mail.."
            required
          />
          <input
            className="input4I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha.."
            required
          />
          <input
            className="input5I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Data de nascimento.."
            required
          />
          <input
            className="input6I"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirmar senha.."
            required
          />
        </form>

        <div className="divButtonI">
          <button className="buttonI" type="submit">
            Concluir
          </button>
        </div>

        <p className="jaLogI">
          Já tem login?{" "}
         
            Entrar
         
        </p>
      </div>
    </div>
  );
}
export default Cadastro;
