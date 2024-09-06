// Importa React e hooks necessários do React e React Router
import React, { useState } from 'react'; // useState é usado para gerenciar o estado local do componente
import { useNavigate } from 'react-router-dom'; // useNavigate é usado para redirecionar o usuário após o registro

// Define o componente funcional Register
const Register = () => {
    // Cria um estado local para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: '', // Nome do usuário
        sobrenome: '', // Sobrenome do usuário
        genero: '', // Gênero do usuário
        dataNascimento: '', // Data de nascimento do usuário
        cep: '', // CEP do usuário
        email: '', // Email do usuário
        senha: '', // Senha do usuário
        confirmarSenha: '' // Confirmar senha para validação
    });
    
    // Cria uma instância do hook useNavigate para redirecionar o usuário
    const navigate = useNavigate();

    // Função chamada sempre que um campo de entrada muda
    const handleChange = (e) => {
        // Atualiza o estado local com o novo valor do campo modificado
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Função chamada quando o formulário é enviado
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

        // Verifica se a senha e a confirmação de senha coincidem
        if (formData.senha !== formData.confirmarSenha) {
            alert('As senhas não coincidem!'); // Alerta se as senhas não coincidirem
            return; // Interrompe a execução da função
        }

        // Envia uma requisição POST para o servidor com os dados do formulário
        const response = await fetch('http://localhost:3001/Registro', {
            method: 'POST', // Método HTTP para enviar dados ao servidor
            headers: {
                'Content-Type': 'application/json' // Informa ao servidor que o corpo da requisição está em formato JSON
            },
            body: JSON.stringify({
                nome: formData.nome, // Nome do usuário
                sobrenome: formData.sobrenome, // Sobrenome do usuário
                genero: formData.genero, // Gênero do usuário
                data_nascimento: formData.dataNascimento, // Data de nascimento do usuário
                cep: formData.cep, // CEP do usuário
                email: formData.email, // Email do usuário
                senha: formData.senha // Senha do usuário
            })
        });

        // Converte a resposta do servidor para JSON
        const data = await response.json();
        // Verifica se a resposta foi bem-sucedida
        if (response.ok) {
            alert(data.message); // Exibe a mensagem de sucesso
            navigate('/'); // Redireciona o usuário para a página inicial
        } else {
            alert(data.message); // Exibe a mensagem de erro
        }
    };

    // Renderiza o formulário
    return (
        <form onSubmit={handleSubmit}> {/* Define a função a ser chamada quando o formulário é enviado */}
            {/* Campos de entrada para o formulário */}
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
            <button type="submit">Registrar</button> {/* Botão para enviar o formulário */}
        </form>
    );
};

export default Register; // Exporta o componente Register para ser usado em outros arquivos
