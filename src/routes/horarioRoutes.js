const express = require('express');
const router = express.Router();
const horarioController = require('../controllers/horarioController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, horarioController.getAll);
router.post('/', authMiddleware, horarioController.create);
router.put('/:id', authMiddleware, horarioController.update);
router.delete('/:id', authMiddleware, horarioController.delete);

module.exports = router;
