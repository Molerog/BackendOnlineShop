const express = require('express');
const router = express.Router();
const OrderHasProductController = require('../controllers/OrderHasProductController')

router.post('/',OrderHasProductController.create);


module.exports = router             