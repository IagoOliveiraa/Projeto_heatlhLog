import React, { useState } from "react";
import "../assets/CSS/cadastro.css"; // Certifique-se de que o caminho está correto.
import imgFundo from "../assets/img/cachFund.jpg"; // Imagem de fundo
import maletaCla from "../assets/img/maletaAzulCla.png"; // Primeira imagem a ser usada
import pers from "../assets/img/persAzulEsc.png"; // segunda imagem a ser usada
import logo from "../assets/img/logo.png";

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { nome, sobrenome, email, senha, confirmarSenha, dataNascimento } =
      formData;

    if (!nome || !sobrenome || !email || !senha || !confirmarSenha || !dataNascimento) {
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
        headers: {
          "Content-Type": "application/json",
        },
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
        alert("Usuário registrado com sucesso!");
        setFormData({
          nome: "",
          sobrenome: "",
          email: "",
          senha: "",
          confirmarSenha: "",
          dataNascimento: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      alert("Erro ao registrar. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="login-containerI">
      <img src={imgFundo} alt="" className="background-imageI" />{" "}
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
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome.."
            required
          />
          <input
            className="input2I"
            type="text"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleChange}
            placeholder="Sobrenome.."
            required
          />
          <input
            className="input3I"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail.."
            required
          />
          <input
            className="input4I"
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            placeholder="Senha.."
            required
          />
          <input
            className="input5I"
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            placeholder="Data de nascimento.."
            required
          />
          <input
            className="input6I"
            type="password"
            name="confirmarSenha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirmar senha.."
            required
          />
          <div className="divButtonI">
            <button className="buttonI" type="submit">
              Concluir
            </button>
          </div>
        </form>

        <p className="jaLogI">
          Já tem login?{" "}
          <a href="/login">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
