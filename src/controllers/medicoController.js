const Medico = require('../models/Medico');

exports.getAll = async (req, res) => {
  try {
    const medicos = await Medico.findAll();
    res.json(medicos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, especialidade, crm } = req.body;
    const medico = await Medico.create({ nome, especialidade, crm });
    res.status(201).json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, especialidade, crm } = req.body;
    
    const medico = await Medico.findByPk(id);
    if (!medico) {
      return res.status(404).json({ error: 'Médico não encontrado' });
    }

    await medico.update({ nome, especialidade, crm });
    res.json(medico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const medico = await Medico.findByPk(id);
    
    if (!medico) {
      return res.status(404).json({ error: 'Médico não encontrado' });
    }

    await medico.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
