const {OrderHasProduct} = require('../models/index');


const OrderHasProductController ={
    async create(req,res) {
        try {
            const orderhasproduct = await OrderHasProduct.create({...req.body})
            res.status(201).send({message: "relation added...", orderhasproduct})
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message:
                "We had an issue creating the relation between order and product..."
            })
        }
        },
}


module.exports = OrderHasProductController