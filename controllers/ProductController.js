const {Product,Order} = require('../models/index');

const ProductController = {
    async create(req,res) {
    try {
        const product = await Product.create({...req.body})
        res.status(201).send({message: "Product added...", product})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message:
            "We had an issue creating the product..."
        })
    }
    },
    async getAllProduct(req,res){
        try {
          const allproducts = await Product.findAll()
           res.status(201).send({message: 'Search completed...', allproducts})
        } catch (error) {
            console.log(error)
            res.status(500).send({message: "We had an issue searching the products..."})
        }
    },
    async getProductOrder(req, res) {
        try {
          const productsOrders = await Product.findAll({
            include: [Order]
          });
          res.status(201).send({ mensaje: 'Show relations', productsOrders });
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .send({ mensaje: ' We had a problem looking for relations' });
        }
      },
}

module.exports = ProductController