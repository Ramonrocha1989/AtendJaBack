const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, usuarioController.getAll);
router.post('/', authMiddleware, usuarioController.create);
router.put('/:id', authMiddleware, usuarioController.update);
router.delete('/:id', authMiddleware, usuarioController.delete);

module.exports = router;
