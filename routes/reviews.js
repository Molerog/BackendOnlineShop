const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/ReviewController');
const { authentication,isAdmin} = require('../middleware/authentication');

router.post('/',authentication, ReviewController.create);
router.get('/', ReviewController.getAllReviews);
router.delete('/:id', authentication, isAdmin, ReviewController.deleteReview);
router.put('/:id', authentication, ReviewController.updateReview);
router.get('/review', ReviewController.getReviewUserProduct);

module.exports = router;
