import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        <form onSubmit={handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                name="senha"
                type="password"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
