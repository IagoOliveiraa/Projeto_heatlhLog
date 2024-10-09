import React, { useState } from "react";
import "../assets/CSS/cadastro.css"; // Certifique-se de que o caminho está correto.
import imgFundo from "../assets/img/imgFundoMulherRuiva.png"; // Imagem de fundo
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
    <div className="login-containerB">
      <img src={imgFundo} alt="" className="background-imageB" />{" "}
      {/* Imagem de fundo diretamente aqui */}
      <div className="login-boxB">
        {/* Aqui está o logo HL com as imagens lado a lado */}
        <div className="logo-with-imagesB">
          <img src={logo} alt="Imagem 1" className="logoB" />
          <div className="images-containerB">
            <img src={maletaCla} alt="Imagem 1" className="side-imageB" />
            <img src={pers} alt="Imagem 2" className="side-image2B" />
          </div>
        </div>

        <h2>Cadastre-se!</h2>

        <form className="colunasSuculentas" onSubmit={handleSubmit}>

          <input
            className="input1B"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nome.."
            required
          />
          <input
            className="input2B"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sobrenome.."
            required
          />
          <input
            className="input3B"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="E-mail.."
            required
          />
          <input
            className="input4B"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha.."
            required
          />
          <input
            className="input5B"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Data de nascimento.."
            required
          />
          <input
            className="input6B"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirmar senha.."
            required
          />

          <button className="buttonB" type="submit">
            Concluir
          </button>
        </form>

        <p>
          Já tem login?{" "}
          <a className="aB" href="#">
            Entrar teste
          </a>
        </p>
      </div>
    </div>
  );
}
export default Cadastro;
