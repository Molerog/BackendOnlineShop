const {Product} = require('../models/index');

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
    async getAll(req,res){
        try {
          const products = await Product.findAll()
           res.status(201).send({message: 'Search completed...', products})
        } catch (error) {
            console.log(error)
            res.status(500).send({message: "We had an issue searching the table..."})
        }
    },
}

module.exports = ProductController