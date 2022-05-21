const {Review} = require('../models/index');

const ReviewController ={
    async create(req,res) {
        try {
            const review = await Review.create({...req.body})
            res.status(201).send({message: "Review added...", review})
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message:
                "We had an issue creating the review..."
            })
        }
        },
        async getAllReviews(req, res) {
            try {
              const allreviews = await Category.findAll();
              res.status(201).send({ mensaje: 'Search completed...', allreviews });
            } catch (error) {
              console.log(error);
              res
                .status(500)
                .send({ mensaje: 'We had a problem looking for all reviews' });
            }
          }
    }

    module.exports = ReviewController