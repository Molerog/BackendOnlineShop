
const { Review, Product, User } = require('../models/index');


const ReviewController = {
  async create(req, res, next) {
    try {
      const review = await Review.create({ ...req.body });
      res.status(201).send({ message: 'Review added...', review });
    } catch (error) { 
      error.origin = 'Review'
      next(error)
    }
  },
  async getAllReviews(req, res) {
    try {
      const allreviews = await Review.findAll();
      res.status(201).send({ mensaje: 'Search completed...', allreviews });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had a problem looking for all reviews' });
    }
  },
  async getAllReviews(req, res) {
    try {
      const allreviews = await Review.findAll();
      res.status(201).send({ mensaje: 'Search completed...', allreviews });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had a problem looking for all reviews' });
    }
  },
  async deleteReview(req, res, next) {
    try {
      await Review.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(201).send({ message: 'Review has been deleted...' });
    } catch (error) {
      error.origin = 'Review'
      next(error)
    }
  },
  async updateReview(req, res, next) {
    try {
      await Review.update(
        { ...req.body },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(201).send({ message: 'Review updated...' });
    } catch (error) {
      console.log(error);
      error.origin = 'Review'
      next(error)
    }
  },
  async getReviewUserProduct(req, res) {
    try {
      const ReviewUserProduct = await Review.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'SectionId', 'CategoryId', 'UserId', 'ProductId'],
        },
        include: [
          {
            model: User,
            attributes: ['name', 'surname'],
          },
          {
            model: Product,
            attributes: ['product', 'price'],
          },
        ],
      });
      res
        .status(201)
        .send({ message: 'Search completed...', ReviewUserProduct });
    } catch (error) {
      res
        .status(500)
        .send({ message: ' We had a problem searching the reviews...' });
    }
  },
};

module.exports = ReviewController;
