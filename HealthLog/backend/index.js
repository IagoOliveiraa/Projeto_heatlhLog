// Importa os módulos necessários
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const port = 3001;

// Configurações do middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost', // Corrige o host para 'localhost'
    port: 3306, // Corrige a porta para 3306
    user: 'root',
    password: 'root',
    database: 'BaseD'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar com o banco de dados:', err);
        process.exit(1);
    }
    console.log('Banco de dados conectado!');
});

// Rota para registrar o usuário
app.post('/Registro', (req, res) => {
    const { nome, sobrenome, genero, data_nascimento, cep, email, senha } = req.body;
    
    // Verifica se todos os campos obrigatórios estão presentes
    if (!nome || !sobrenome || !genero || !data_nascimento || !cep || !email || !senha) {
        return res.status(400).send({ message: 'Todos os campos são obrigatórios.' });
    }

    const query = 'INSERT INTO usuarios (nome, sobrenome, genero, data_nascimento, cep, email, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, sobrenome, genero, data_nascimento, cep, email, senha], (err, result) => {
        if (err) {
            console.error('Erro ao registrar o usuário:', err);
            res.status(500).send({ message: 'Erro ao registrar o usuário.' });
        } else {
            res.status(200).send({ message: 'Usuário registrado com sucesso!' });
        }
    });
});

//parte do LOGIN==========================================================================================
app.post('/Login', (req, res) => {
    const { email, senha } = req.body;

    // Verifica se os campos email e senha foram preenchidos
    if (!email || !senha) {
        return res.status(400).send({ message: 'Email e senha são obrigatórios.' });
    }

    // Busca o usuário pelo email e verifica se a senha está correta
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error('Erro ao buscar o usuário:', err);
            return res.status(500).send({ message: 'Erro no servidor.' });
        }

        if (results.length > 0) {
            // Se o usuário for encontrado, retorna sucesso
            res.status(200).send({ message: 'Login bem-sucedido!', user: results[0] });
        } else {
            // Se não houver correspondência, retorna erro
            res.status(401).send({ message: 'Credenciais inválidas.' });
        }
    });
});




// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
