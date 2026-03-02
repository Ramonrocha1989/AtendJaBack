const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('admin', 'funcionario'),
    allowNull: false
  }
}, {
  tableName: 'usuarios',
  timestamps: true
});

Usuario.beforeCreate(async (usuario) => {
  usuario.senha = await bcrypt.hash(usuario.senha, 10);
});

Usuario.beforeUpdate(async (usuario) => {
  if (usuario.changed('senha')) {
    usuario.senha = await bcrypt.hash(usuario.senha, 10);
  }
});

module.exports = Usuario;
