const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/',CategoryController.create);
router.get('/',CategoryController.getAllCategory);
router.delete('/id/:id',CategoryController.deleteCategory);
router.put('/id/:id',CategoryController.updateCategory);
router.get('/id/:id',CategoryController.getCategoryById);
router.get('/name/:category',CategoryController.getCategoryByName);

module.exports = router 