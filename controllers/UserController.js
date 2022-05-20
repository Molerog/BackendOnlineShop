const { User } = require('../models/index');

const UserController = {
  async create(req, res) {
    try {
      const user = await User.create({ ...req.body });
      res.status(201).send({ mensaje: 'User added...', user });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        mensaje: 'We had an issue creating the user...',
      });
    }
  },
  async getAll(req, res) {
    try {
      const users = await User.findAll();
      res.status(201).send({ mensaje: 'Search completed...', users });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had an issue searching the table...' });
    }
  },
};

module.exports = UserController;
