import React, { useState } from "react";
import "../assets/CSS/login.css"; // importação do css
import imgFundo from "../assets/img/imgFundoMulherRuiva.png"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // imagem maleta clara
import pers from "../assets/img/persAzulEsc.png"; // imagem pessoa
import logo from "../assets/img/logo.png"; // imagem logo
import { useNavigate } from "react-router-dom";


function Login() {
  
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
});

const navigate = useNavigate();

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();

    // Envia uma requisição POST para a rota de login
    const response = await fetch('http://localhost:3001/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: formData.email,
            senha: formData.senha
        })
    });

    const data = await response.json();
    if (response.ok) {
        alert(data.message); // Exibe mensagem de sucesso
        // Armazena informações do usuário no localStorage (opcional)
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard'); // Redireciona para outra página após login
    } else {
        alert(data.message); // Exibe mensagem de erro
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