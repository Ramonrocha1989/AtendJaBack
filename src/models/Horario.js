const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Medico = require('./Medico');

const Horario = sequelize.define('Horario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  medicoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'medicos',
      key: 'id'
    }
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horaFim: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  tableName: 'horarios',
  timestamps: true
});

Horario.belongsTo(Medico, { foreignKey: 'medicoId' });
Medico.hasMany(Horario, { foreignKey: 'medicoId' });

module.exports = Horario;
