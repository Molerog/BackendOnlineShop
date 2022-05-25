const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const { authentication } = require('../middleware/authentication');

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/userorder', authentication, UserController.getUserOrderProduct);
router.post('/login', UserController.login);
router.delete('/logout', authentication, UserController.logout);


module.exports = router;
