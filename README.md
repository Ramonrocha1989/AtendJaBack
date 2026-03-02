# AtendJá - Backend API

Backend do sistema de agendamento médico usando Node.js + Express + PostgreSQL.

## 🚀 Stack

- Node.js + Express
- PostgreSQL
- Sequelize ORM
- JWT (autenticação)
- bcrypt (hash de senhas)

## 📦 Instalação Local

```bash
npm install
```

## ⚙️ Configuração Local

1. Crie o arquivo `.env`:
```env
PORT=8080
DB_HOST=127.0.0.1
DB_PORT=5432
DB_NAME=atendjaja
DB_USER=postgres
DB_PASSWORD=postgres
JWT_SECRET=seu_secret_aqui
DATABASE_URL=
```

2. Inicie o PostgreSQL (Docker):
```bash
docker run -d --name postgres-atendjaja \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=atendjaja \
  -p 5432:5432 postgres:15
```

3. Crie usuário admin:
```bash
node createAdmin.js
```

4. Inicie o servidor:
```bash
npm run dev
```

## 🌐 Deploy no Render

### 1. Criar PostgreSQL no Render
- Acesse https://render.com
- New → PostgreSQL (Free)
- Copie a `Internal Database URL`

### 2. Criar Web Service
- New → Web Service
- Conecte seu repositório GitHub
- Configure:
  - **Build Command**: `npm install`
  - **Start Command**: `npm start`
  - **Environment Variables**:
    - `DATABASE_URL`: Cole a URL do PostgreSQL
    - `JWT_SECRET`: `atendjaja_secret_key_2024`

### 3. Deploy
- Clique em "Create Web Service"
- Aguarde o deploy (3-5 min)
- Sua URL será: `https://seu-app.onrender.com`

### 4. Criar usuário admin no Render
Após deploy, acesse o Shell no Render e rode:
```bash
node createAdmin.js
```

## 📡 Endpoints

**Base URL**: `http://localhost:8080/api` (local) ou `https://seu-app.onrender.com/api` (produção)

### Autenticação
```http
POST /api/auth/login
Body: { "email": "string", "senha": "string" }
Response: { "id": 1, "nome": "string", "email": "string", "tipo": "admin", "token": "jwt_token" }
```

### Usuários (requer token)
```http
GET    /api/usuarios
POST   /api/usuarios
PUT    /api/usuarios/:id
DELETE /api/usuarios/:id
```

### Médicos (requer token)
```http
GET    /api/medicos
POST   /api/medicos
PUT    /api/medicos/:id
DELETE /api/medicos/:id
```

### Horários (requer token)
```http
GET    /api/horarios
POST   /api/horarios
PUT    /api/horarios/:id
DELETE /api/horarios/:id
```

## 🔐 Autenticação

Todos os endpoints (exceto `/api/auth/login`) requerem token JWT:
```http
Authorization: Bearer <token>
```

## 📝 Formatos

- **data**: `YYYY-MM-DD` (ex: `2024-01-15`)
- **horaInicio/horaFim**: `HH:mm` (ex: `08:00`)
- **tipo**: `"admin"` ou `"funcionario"`

## 🔧 Scripts

```bash
npm start          # Produção
npm run dev        # Desenvolvimento com nodemon
node createAdmin.js # Criar usuário admin
npx prisma studio  # Visualizar banco de dados
```

## 📂 Estrutura

```
src/
├── config/
│   └── database.js      # Configuração Sequelize
├── models/
│   ├── Usuario.js       # Model de usuários
│   ├── Medico.js        # Model de médicos
│   └── Horario.js       # Model de horários
├── controllers/
│   ├── authController.js
│   ├── usuarioController.js
│   ├── medicoController.js
│   └── horarioController.js
├── routes/
│   ├── authRoutes.js
│   ├── usuarioRoutes.js
│   ├── medicoRoutes.js
│   └── horarioRoutes.js
├── middleware/
│   └── auth.js          # Middleware JWT
└── server.js            # Servidor Express
```

## 🐛 Troubleshooting

**Erro de conexão local:**
```bash
# Verifique se PostgreSQL está rodando
docker ps | grep postgres

# Reinicie o container
docker restart postgres-atendjaja
```

**Erro 401 no login:**
```bash
# Recrie o usuário admin
node createAdmin.js
```

## 📄 Licença

ISC
