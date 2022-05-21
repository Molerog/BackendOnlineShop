const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

router.post('/',CategoryController.create);
router.get('/',CategoryController.getAllCategory);

module.exports = router 