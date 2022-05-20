const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');
const { route } = require('./users.js');

router.post('/', OrderController.create);
router.get('/orderuser', OrderController.getOrderUser);
router.get('/', OrderController.getAllOrder);

module.exports = router;
