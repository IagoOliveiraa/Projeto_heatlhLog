import React, { useState } from "react";
import "../assets/CSS/cadastroClinic.css"; // Certifique-se de que o caminho está correto.
import imgFundo from "../assets/img/imgFundoMulherRuiva.png"; // Imagem de fundo
import maletaEsc from "../assets/img/maletaEsc.png"
import persCla from "../assets/img/persCla.png"

import logo from "../assets/img/logo.png";

function CadastroClinic() {
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
    <div className="login-containerC">
      <img src={imgFundo} alt="" className="background-imageC" />{" "}
      {/* Imagem de fundo diretamente aqui */}
      <div className="login-boxC">
        {/* Aqui está o logo HL com as imagens lado a lado */}
        <div className="logo-with-imagesC">
          <img src={logo} alt="Imagem 1" className="logoC" />
          <div className="images-containerC">
            <img src={maletaEsc} alt="Imagem 1" className="side-imageC" />
            <img src={persCla} alt="Imagem 2" className="side-image2C" />
          </div>
        </div>

        <h2>Cadastre sua clínica!</h2>

        <form className="colunasSuculentasC" onSubmit={handleSubmit}>

          <input
            className="input1C"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nome da clínica.."
            required
          />
          <input
            className="input2C"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha.."
            required
          />
          <input
            className="input3C"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="CNPJ.."
            required
          />
          <input
            className="input4C"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirme a senha.."
            required
          />
          <input
            className="input5C"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="E-mail da empresa.."
            required
          />
          <input
            className="input6C"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="CEP.."
            required
          />

          <button className="buttonC" type="submit">
            Concluir
          </button>
        </form>

      </div>
    </div>
  );
}
export default CadastroClinic;
