const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');


router.post('/', ProductController.create);
router.get('/', ProductController.getAllProduct);
router.get('/productsorder',ProductController.getProductOrder);
router.put('/id/:id',ProductController.updateProduct);
module.exports = router    