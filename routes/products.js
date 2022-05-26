const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const {authentication, isAdmin} = require('../middleware/authentication');
const {uploadUserProductsImages} = require('../middleware/multer');


router.post('/', authentication, isAdmin, uploadUserProductsImages.single('imageProduct'), ProductController.create);
router.get('/', ProductController.getAllProduct);
router.get('/productsorder',ProductController.getProductOrder);
router.put('/id/:id',authentication, isAdmin, ProductController.updateProduct);
router.delete('/id/:id',authentication, isAdmin, ProductController.deleteProduct);
router.get('/productcategorysection',ProductController.getProductCategorySection);
router.get('/id/:id',ProductController.getProductById);
router.get('/name/:product',ProductController.getProductByName);
router.get('/price/:price',ProductController.getProductByPrice);
router.get('/ordered',ProductController.productOrderedByPrice);
module.exports = router    