const {Product} = require('../models/index');

const ProductController = {
    async create(req,res) {
    try {
        const product = await Product.create({...req.body})
        res.status(201).send({mensaje: "Product added...", product})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje:
            "We had an issue creating the product..."
        })
    }
    },
}

module.exports = ProductController