const {OrderHasProduct,Order,Product} = require('../models/index');


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
        async getAllOrderHasProduct(req, res) {
            try {
              const alltable = await OrderHasProduct.findAll();
              res.status(201).send({ mensaje: 'Show all Orders', alltable });
            } catch (error) {
              console.log(error);
              res
                .status(500)
                .send({ mensaje: 'We had a problem looking for all Orders' });
            }
          },
          async getProductOrder(req, res) {
            try {
              const productsOrders = await OrderHasProduct.findAll({
                    attributes: {exclude: ['createdAt','updatedAt']},
                    include:[
                      
                      {
                        model:Product,
                        attributes: ['product','price']
                      },
                      {
                        model: Order,
                        attributes: ['order_num']
                      }
                    ]
                    
              });
              res.status(201).send({ mensaje: 'Show relations', productsOrders});
            } catch (error) {
              console.log(error);
              res
                .status(500)
                .send({ mensaje: ' We had a problem looking for relations' });
            }
          },
}


module.exports = OrderHasProductController