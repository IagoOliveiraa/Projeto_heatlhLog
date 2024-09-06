// src/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        genero: '',
        dataNascimento: '',
        cep: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        const response = await fetch('http://localhost:3001/Registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: formData.nome,
                sobrenome: formData.sobrenome,
                genero: formData.genero,
                data_nascimento: formData.dataNascimento,
                cep: formData.cep,
                email: formData.email,
                senha: formData.senha
            })
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            navigate('/');
        } else {
            alert(data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
            <input name="sobrenome" placeholder="Sobrenome" value={formData.sobrenome} onChange={handleChange} required />
            <select name="genero" value={formData.genero} onChange={handleChange} required>
                <option value="">Selecione o gênero</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
            </select>
            <input name="dataNascimento" type="date" value={formData.dataNascimento} onChange={handleChange} required />
            <input name="cep" placeholder="CEP" value={formData.cep} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input name="senha" type="password" placeholder="Senha" value={formData.senha} onChange={handleChange} required />
            <input name="confirmarSenha" type="password" placeholder="Confirmar Senha" value={formData.confirmarSenha} onChange={handleChange} required />
            <button type="submit">Registrar</button>
        </form>
    );
};

export default Registro;
