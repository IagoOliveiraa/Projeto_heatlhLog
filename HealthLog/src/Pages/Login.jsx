import React, { useState } from "react";
import "../assets/CSS/login.css"; // importação do css
import imgFundo from "../assets/img/imgFundoMulherRuiva.png"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // imagem maleta clara
import pers from "../assets/img/persAzulEsc.png"; // imagem pessoa
import logo from "../assets/img/logo.png"; // imagem logo

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => { // aviso caso todos os campos nao foram preenchidos
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (email === "exemplo@teste.com" && password === "123456") { // aviso login realizado com sucesso ou falha
      alert("Login realizado com sucesso!");
    } else {
      alert("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="login-container">     {/* "body para essa pagina em especifico" */}
      <img src={imgFundo} alt="" className="background-image" />
      {/* Imagem de fundo diretamente aqui */}
      <div className="login-box">
        {/* Aqui está o logo HL com as imagens lado a lado */}
        <div className="logo-with-images">
          <img src={logo} alt="Imagem 1" className="logo" />
          <div className="images-container">
            <img src={maletaCla} alt="Imagem 1" className="side-image" />
            <img src={pers} alt="Imagem 2" className="side-image2" />
          </div>
        </div>

        <h2>Bem-vindo(a)!</h2>
        <p>Preencha seus dados corretamente para acessar sua conta.</p>

        <form onSubmit={handleSubmit}> {/* inputs para email e senha */}
          <input className="input1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail.."
            required
          />
          <input className="input2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha.."
            required
          />

          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>

          <button className="button" type="submit">Entrar</button>
        </form>

        <p>
          Não tem login? <a className="a" href="#">Cadastre-se!</a>
        </p>
      </div>
    </div>
  );
}
export default Login; /* exportação do login para o router */
