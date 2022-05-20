const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/userorder', UserController.getUserOrder);

module.exports = router;
