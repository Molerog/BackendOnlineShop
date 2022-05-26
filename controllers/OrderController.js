const { Order, User, Product, Section } = require('../models/index');

//-----> Controlador para tabla "Order" <------//

//-----Creación de pedido-----//
const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create({ ...req.body });
      res.status(201).send({ message: 'order added...', order });
    } catch (error) {
      console.log(error);
      error.origin = 'Order'
          next(error)
    }
  },
  //-----Muestra el pedido y a su usuario-----//
  async getOrderUser(req, res) {
    try {
      const orderUsers = await Order.findAll({
        include: [User],
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
