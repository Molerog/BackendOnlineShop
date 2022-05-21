const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');


router.post('/', ProductController.create);
router.get('/', ProductController.getAllProduct);

module.exports = router    