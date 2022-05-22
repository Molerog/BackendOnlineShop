const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');


router.post('/', ProductController.create);
router.get('/', ProductController.getAllProduct);
router.get('/productsorder',ProductController.getProductOrder);
router.put('/id/:id',ProductController.updateProduct);
router.delete('/id/:id',ProductController.deleteProduct);
router.get('/productcategorysection',ProductController.getProductCategorySection);
router.get('/id/:id',ProductController.getProductById);
router.get('/name/:product',ProductController.getProductByName);
router.get('/price/:price',ProductController.getProductByPrice);
module.exports = router    