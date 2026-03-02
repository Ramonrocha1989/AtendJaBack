const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const medicoRoutes = require('./routes/medicoRoutes');
const horarioRoutes = require('./routes/horarioRoutes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/medicos', medicoRoutes);
app.use('/api/horarios', horarioRoutes);

const PORT = process.env.PORT || 8080;

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});
