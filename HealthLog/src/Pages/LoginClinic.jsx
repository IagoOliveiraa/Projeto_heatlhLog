import React, { useState } from "react";
import "../assets/CSS/loginCLinic.css"
import imgFundo from "../assets/img/imgFundoMulherRuiva.png"; // Imagem de fundo
import logo from "../assets/img/logo.png";
import maletaEsc from "../assets/img/maletaEsc.png"
import persCla from "../assets/img/persCla.png"

function LoginClini() {
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
    <div className="login-containerA">
    <img src={imgFundo} alt="" className="background-imageA" />{" "}
    {/* Imagem de fundo diretamente aqui */}
    <div className="login-boxA">
      {/* Aqui está o logo HL com as imagens lado a lado */}
      <div className="logo-with-imagesA">
        <img src={logo} alt="Imagem 1" className="logoA" />
        <div className="images-containerA">
          <img src={maletaEsc} alt="Imagem 1" className="side-imageA" />
          <img src={persCla} alt="Imagem 2" className="side-image2A" />
        </div>
      </div>

      <h2>Bem-vindo(a)!</h2>
      <p>Preencha seus dados corretamente para acessar sua conta.</p>

      <form onSubmit={handleSubmit}>
        <input className="input1A"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail.."
          required
        />
        <input className="input2A"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha.."
          required
        />

        <a href="#" className="forgot-passwordA">
          Esqueci minha senha
        </a>

        <button className="buttonA" type="submit">ENTRAR</button>
      </form>

      <p>
        Não tem login? <a className="aA" href="#">Cadastre-se!</a>
      </p>
    </div>
  </div>
  );
}
export default LoginClini;
