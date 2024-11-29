import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de importar useNavigate corretamente
import "../assets/CSS/login.css"; // Importação do CSS
import imgFundo from "../assets/img/cachFund.jpg"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // Imagem maleta clara
import pers from "../assets/img/persAzulEsc.png"; // Imagem pessoa
import logo from "../assets/img/logo.png"; // Imagem logo

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Certifique-se de estar usando o hook correto do React Router

  const handleSubmit = async (e) => { // Adicionei `async` aqui
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha: password }),
      });

      const data = await response.json();

      if (response.ok) { // Verifica se o status é 200-299
        alert(data.message); // Login realizado com sucesso
        localStorage.setItem("token", data.token); // Armazenando o token no localStorage
        navigate("/inicio"); // Redirecionando para a página inicial
      } else {
        alert(data.message); // Exibir mensagem de erro
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao conectar com o servidor. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="login-container">
      <img src={imgFundo} alt="" className="background-image" />
      <div className="login-box">
        <div className="logo-with-images">
          <img src={logo} alt="Logo" className="logo" />
          <div className="images-container">
            <img src={maletaCla} alt="Maleta" className="side-image" />
            <img src={pers} alt="Pessoa" className="side-image2" />
          </div>
        </div>

        <h2 className="bemV">Bem-vindo(a)!</h2>
        <p className="pree">
          Preencha seus dados corretamente para acessar sua conta.
        </p>

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

export default Login; // Exportação do login para o router
