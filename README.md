Projeto: Site e API de Cadastro

Descrição

Este projeto consiste em um site e uma API para cadastro de usuários. O frontend foi desenvolvido com React e Vite, enquanto o backend utiliza Node.js e Express.

Tecnologias Utilizadas

Frontend:

React

Vite

Axios

React Router Dom

Backend:

Node.js

Express

MongoDB (com Mongoose) ou PostgreSQL (com Sequelize)

JWT para autenticação

Estrutura do Projeto

projeto/
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- App.js
|   |   |-- main.jsx
|   |-- package.json
|   |-- vite.config.js
|
|-- backend/
|   |-- src/
|   |   |-- controllers/
|   |   |-- models/
|   |   |-- routes/
|   |   |-- app.js
|   |   |-- server.js
|   |-- package.json

Instalação e Execução

Clonando o repositório

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

Configurando o Backend

cd backend
npm install
cp .env.example .env # Configurar variáveis de ambiente
npm start

Configurando o Frontend

cd frontend
npm install
npm run dev

Endpoints da API

Criar Usuário

POST /api/users/register

Body:

{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha123"
}

Autenticar Usuário

POST /api/users/login

Body:

{
  "email": "usuario@email.com",
  "password": "senha123"
}

Contribuição

Fork este repositório

Crie uma branch com sua feature (git checkout -b minha-feature)

Commit suas mudanças (git commit -m 'Adiciona minha feature')

Faça push para a branch (git push origin minha-feature)

Abra um Pull Request
