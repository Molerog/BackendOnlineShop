const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController');

router.post('/', ReviewController.create);
router.get('/', ReviewController.getAllReviews);
router.delete('/:id', ReviewController.deleteReview);
router.put('/:id', ReviewController.updateReview);
router.get('/review', ReviewController.getReviewUserProduct);

module.exports = router;
