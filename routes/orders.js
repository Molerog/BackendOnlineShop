const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');

router.post('/',OrderController.create);
router.get('/', OrderController.getAllOrder);
router.get('/orderuser', OrderController.getOrderUser);


module.exports = router             