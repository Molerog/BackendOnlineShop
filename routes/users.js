const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const { authentication,isAdmin } = require('../middleware/authentication');

router.post('/', UserController.create);
router.get('/', UserController.getAll);
router.get('/userorder', authentication, isAdmin, UserController.getUserOrderProduct);
router.post('/login', UserController.login);
router.get('/confirm/:email',UserController.confirm)
router.delete('/logout', authentication, UserController.logout);
router.get('/info', authentication, UserController.getUserInfo);


module.exports = router;
