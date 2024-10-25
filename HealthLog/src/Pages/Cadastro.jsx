import React, { useState } from "react";
import axios from "axios";
import "../CSS/Cadastro.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cnpj: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cep: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não correspondem.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/clinics/register", formData);
      if (response.status === 201) {
        setSuccess("Clínica cadastrada com sucesso!");
        setError("");
        setFormData({
          nome: "",
          cnpj: "",
          email: "",
          senha: "",
          confirmarSenha: "",
          cep: "",
        });
      }
    } catch (err) {
      setError("Erro ao cadastrar clínica: " + err.message);
    }
  };

  return (
    <div className="cadastro-container">
      <form onSubmit={handleSubmit} className="cadastro-form">
        <h2>Cadastre sua clínica</h2>

        <div className="input-group">
          <input
            type="text"
            name="nome"
            placeholder="Nome da Clínica"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cnpj"
            placeholder="CNPJ"
            value={formData.cnpj}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="E-mail da Empresa"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cep"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            value={formData.senha}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmarSenha"
            placeholder="Confirme a Senha"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}

        <button type="submit" className="cadastro-button">Próximo</button>
      </form>
    </div>
  );
};

export default Cadastro;
