const {Category} = require('../models/index');

const CategoryController ={
    async create(req,res) {
        try {
            const category = await Category.create({...req.body})
            res.status(201).send({message: "Category added...", category})
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message:
                "We had an issue creating the category..."
            })
        }
        },
        async getAllCategory(req, res) {
            try {
              const allcategories = await Category.findAll();
              res.status(201).send({ mensaje: 'Search completed...', allcategories });
            } catch (error) {
              console.log(error);
              res
                .status(500)
                .send({ mensaje: 'We had a problem looking for all categories' });
            }
          }
    }

    module.exports = CategoryController