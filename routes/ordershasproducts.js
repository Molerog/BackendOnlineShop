const express = require('express');
const router = express.Router();
const OrderHasProductController = require('../controllers/OrderHasProductController')

router.get('/',OrderHasProductController.getAllOrderHasProduct);
router.post('/',OrderHasProductController.create);
router.get('/orderproduct',OrderHasProductController.getProductOrder);


module.exports = router             