const { Order, User } = require('../models/index');

const OrderController = {
  async create(req, res) {
    try {
      const order = await Order.create({ ...req.body });
      res.status(201).send({ message: 'product added...', order });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'We had an issue creating the product...',
      });
    }
  },
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
};

module.exports = OrderController;
