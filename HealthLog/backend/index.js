import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import cors from 'cors';
import mysql from 'mysql2';
import jwt from 'jsonwebtoken'; // Importando JWT

// Configuração do servidor Express
const app = express();
const PORT = 5000;

// Configuração do CORS para permitir requisições do frontend
app.use(cors());

// Configuração do bodyParser para analisar dados JSON
app.use(bodyParser.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Altere conforme seu usuário do MySQL
  password: 'root',  // Altere conforme sua senha do MySQL
  database: 'BaseD',  // Substitua pelo nome do seu banco de dados
  port:'3306' 
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

// Chave secreta para assinar os tokens
const SECRET_KEY = 'sua_chave_secreta'; // Substitua por uma chave forte

// Rota para cadastro de usuário
app.post('/register', async (req, res) => {
  const { nome, sobrenome, email, senha, data_nascimento } = req.body;

  if (!nome || !sobrenome || !email || !senha || !data_nascimento) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  // Verifica se o email já está cadastrado no banco de dados
  const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, result) => {
    if (err) {
      console.error('Erro ao verificar email:', err);
      return res.status(500).json({ message: 'Erro ao verificar e-mail.' });
    }

    if (result.length > 0) {
      return res.status(400).json({ message: 'Este e-mail já está cadastrado.' });
    }

    // Criação do hash da senha
    bcrypt.hash(senha, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Erro ao criar hash da senha:', err);
        return res.status(500).json({ message: 'Erro ao registrar usuário.' });
      }

      // Insere os dados do novo usuário no banco de dados
      const insertQuery =
        'INSERT INTO usuarios (nome, sobrenome, email, senha, data_nascimento) VALUES (?, ?, ?, ?, ?)';
      db.query(
        insertQuery,
        [nome, sobrenome, email, hashedPassword, data_nascimento],
        (err, result) => {
          if (err) {
            console.error('Erro ao inserir dados no banco:', err);
            return res.status(500).json({ message: 'Erro ao registrar usuário.' });
          }

          res.status(200).json({ message: 'Usuário registrado com sucesso!' });
        }
      );
    });
  });
});

// Rota para login de usuário
app.post('/login', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Preencha todos os campos!' });
  }

  // Verifica se o e-mail está registrado no banco de dados
  const checkEmailQuery = 'SELECT * FROM usuarios WHERE email = ?';
  db.query(checkEmailQuery, [email], (err, result) => {
    if (err) {
      console.error('Erro ao verificar email:', err);
      return res.status(500).json({ message: 'Erro ao verificar e-mail.' });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: 'E-mail não encontrado.' });
    }

    const user = result[0];

    // Compara a senha fornecida com o hash armazenado
    bcrypt.compare(senha, user.senha, (err, isMatch) => {
      if (err) {
        console.error('Erro ao comparar senha:', err);
        return res.status(500).json({ message: 'Erro ao fazer login.' });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Senha incorreta.' });
      }

      // Senha correta, gera um token JWT
      const token = jwt.sign(
        { id: user.id, email: user.email }, // Payload
        SECRET_KEY, // Chave secreta
        { expiresIn: '1h' } // Token expira em 1 hora
      );

      res.status(200).json({ message: 'Login realizado com sucesso!', token });
    });
  });
});

// Middleware para verificar o token JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.user = user; // Adiciona os dados do usuário ao request
    next();
  });
};

// Rota protegida
app.get('/protected', authenticateToken, (req, res) => {
  res.status(200).json({ message: `Bem-vindo, usuário ${req.user.email}!` });
});

// Inicia o servidor na porta configurada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
