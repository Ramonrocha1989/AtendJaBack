const Horario = require('../models/Horario');

exports.getAll = async (req, res) => {
  try {
    const horarios = await Horario.findAll();
    res.json(horarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { medicoId, data, horaInicio, horaFim } = req.body;
    const horario = await Horario.create({ medicoId, data, horaInicio, horaFim });
    res.status(201).json(horario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { medicoId, data, horaInicio, horaFim } = req.body;
    
    const horario = await Horario.findByPk(id);
    if (!horario) {
      return res.status(404).json({ error: 'Horário não encontrado' });
    }

    await horario.update({ medicoId, data, horaInicio, horaFim });
    res.json(horario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const horario = await Horario.findByPk(id);
    
    if (!horario) {
      return res.status(404).json({ error: 'Horário não encontrado' });
    }

    await horario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
