const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController.js');

router.post('/',UsuarioController.create)



module.exports = router