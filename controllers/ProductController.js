const {Product} = require('../models/index');


const ProductController ={
    async create(req,res) {
        try {
            const product = await User.create({...req.body})
            req.body.role = "user"
            res.status(201).send({mensaje: "User added...", product})
        } catch (error) {
            console.log(error);
            res.status(500).send({
                mensaje:
                "We had an issue creating the user..."
            })
        }
        },
}



module.exports = ProductController