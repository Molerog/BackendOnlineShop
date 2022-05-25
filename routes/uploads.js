const express = require('express');
const UploadController = require('../controllers/UploadController');
const router = express.Router();


router.post('/', UploadController.upload, UploadController.uploadFile);


module.exports = router;