import React, { useState } from "react";
import "../assets/CSS/login.css"; // Importação do CSS
import imgFundo from "../assets/img/Boas-vindas.jpg"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // imagem maleta clara
import pers from "../assets/img/persAzulEsc.png"; // imagem pessoa
import logo from "../assets/img/logo.png"; // imagem logo
import { useNavigate } from "react-router-dom"; // Importa useNavigate para redirecionamento

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Enviar dados de login para o backend
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Armazena o token no localStorage
        localStorage.setItem("token", data.token);

        // Redireciona para a página "/inicio"
        navigate("/inicio");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Ocorreu um erro, tente novamente.");
    }
  };

  return (
    <div className="login-container">
      <img src={imgFundo} alt="" className="background-image" />
      <div className="login-box">
        <div className="logo-with-images">
          <img src={logo} alt="Imagem 1" className="logo" />
          <div className="images-container">
            <img src={maletaCla} alt="Imagem 1" className="side-image" />
            <img src={pers} alt="Imagem 2" className="side-image2" />
          </div>
        </div>

        <h2 className="bemV">Bem-vindo(a)!</h2>
        <p className="pree">Preencha seus dados corretamente para acessar sua conta.</p>

        <form onSubmit={handleSubmit}>
          <input
            className="input1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail.."
            required
          />
          <input
            className="input2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha.."
            required
          />

          <a href="#" className="forgot-password">
            Esqueci minha senha
          </a>

          <button className="button" type="submit">
            Entrar
          </button>
        </form>

        <p>
          Não tem login? <a className="a" href="/cadastro">Cadastre-se!</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
