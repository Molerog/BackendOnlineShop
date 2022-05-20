const {Order} = require('../models/index');


const OrderController ={
    async create(req,res) {
        try {
            const order = await Order.create({...req.body})
            res.status(201).send({message: "product added...", order})
        } catch (error) {
            console.log(error);
            res.status(500).send({
                message:
                "We had an issue creating the product..."
            })
        }
        },
}



module.exports = OrderController