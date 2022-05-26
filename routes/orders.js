const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController.js');
const {authentication, isAdmin} = require('../middleware/authentication');

router.post('/',authentication, OrderController.create);
router.get('/', OrderController.getAllOrder);
router.get('/orderuser', OrderController.getOrderUser);
router.get('/orderproducts',OrderController.getOrderProduct);


module.exports = router             