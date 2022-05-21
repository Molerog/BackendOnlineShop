const express = require('express');
const SectionController = require('../controllers/SectionController');
const router = express.Router();

router.post('/', SectionController.create);
router.get('/', SectionController.getAllSections);

module.exports = router;
