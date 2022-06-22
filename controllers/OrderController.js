const { Order, User, Product, Section, Order_Product } = require('../models/index');

//-----> Controlador para tabla "Order" <------//

//-----Creación de pedido-----//
  const OrderController = {
    async create(req, res, next) {
      try {
        const newOrder = {
          UserId: req.user.id,
          date: new Date(),
          updatedAt: new Date(),
          createdAt: new Date(),
        };
        const order = await Order.create(newOrder);
        req.body.ProductId.forEach(async productId => {
          await Order_Product.create({ ProductId: productId, OrderId: order.id });
        });
        res.status(201).send({ message: 'order added...', order });
      } catch (error) {
        console.log(error);
        error.origin = 'Order';
        next(error);
      }
    },
  //-----Muestra el pedido y a su usuario-----//
  async getOrderUser(req, res) {
    try {
      const orderUsers = await Order.findAll({
        where:{
          id:req.user.id
        },
        // include: [User],
      });
      res.status(201).send({ mensaje: 'Show Orders with Users', orderUsers });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: ' We had a problem looking for Orders with Users ' });
    }
  },
  //-----Obtiene todos los pedidos-----//
  async getAllOrder(req, res) {
    try {
      const allorders = await Order.findAll();
      res.status(201).send({ mensaje: 'Show all Orders', allorders });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had a problem looking for all Orders' });
    }
  },
  async getOrderProduct(req, res) {
    try {
      const ordersProduct = await Order.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'SectionId', 'CategoryId'],
        },
        include: [
          {
            model: Product,
            through: { attributes: [] },
            attributes: ['product', 'price'],
            include: [{
              model: Section,
              attributes:['section']
            }],
          },
        ],
      });
      res.status(201).send({ message: 'Show relations', ordersProduct });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: ' We had a problem looking for relations' });
    }
  },
};

module.exports = OrderController;
