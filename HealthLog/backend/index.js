// Importa os módulos necessários
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

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

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
