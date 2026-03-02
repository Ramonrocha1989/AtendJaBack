const express = require('express');
const router = express.Router();
const medicoController = require('../controllers/medicoController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, medicoController.getAll);
router.post('/', authMiddleware, medicoController.create);
router.put('/:id', authMiddleware, medicoController.update);
router.delete('/:id', authMiddleware, medicoController.delete);

module.exports = router;
