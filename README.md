# 📋 Site e API de Cadastro

Projeto completo de autenticação com **frontend em React + Vite** e **backend com Node.js + Express**, utilizando banco de dados **MongoDB ou PostgreSQL** e autenticação via **JWT**.

---

## 🚀 Tecnologias

### 🖥️ Frontend
- React
- Vite
- Axios
- React Router DOM

### 🛠️ Backend
- Node.js
- Express
- MongoDB + Mongoose **ou** PostgreSQL + Sequelize
- JWT (autenticação)

---

## 📁 Estrutura do Projeto

```
projeto/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── backend/
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── app.js
    │   └── server.js
    └── package.json
```

---

## 🧪 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Configurar o Backend

```bash
cd backend
npm install
cp .env.example .env   # Configure as variáveis de ambiente
npm start
```

### 3. Configurar o Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Endpoints da API

### Criar Usuário

`POST /api/users/register`

```json
{
  "name": "Nome do Usuário",
  "email": "usuario@email.com",
  "password": "senha123"
}
```

### Autenticar Usuário

`POST /api/users/login`

```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

---