const { User, Order, Product, Token, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];
const {Op} = Sequelize;

//-----Creación de Usuarios-----//
const UserController = {
  async create(req, res) {
    try {
      if (
        req.body.name === !null &&
        req.body.surname === !null &&
        req.body.email === !null &&
        req.body.dni === !null &&
        req.body.password === !null
      ) {
        req.body.role = 'user';
        const password = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({ ...req.body, password }); //Esto es lo mismo que password: password
        res.status(201).send({ message: 'User added...', user });
      } else {
        res.status(401).send({ message: 'Please, enter all fields' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'We had an issue creating the user...',
      });
    }
  },
  //User <---- LOGIN ----------------------------------------------->
  async login(req, res) {
    try {
      const user = await User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (!user) {
        return res
          .status(400)
          .send({ message: 'User or password incorrect.1..' });
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: 'User or password incorrect.2..' });
      }
      token = jwt.sign({ id: user.id }, jwt_secret);
      Token.create({ token: token, UserId: user.id });
      //res.send({ message: 'user logged...', user });
      res.send({ message: 'Bienvenid@' + user.name, user, token });
    } catch (error) {
      res.status(401).send({ message: 'We had an issue checking the user...' });
    }
  },
  //-----Obtiene todos los usuarios-----//
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
  //-----Obtiene el usuario y su pedido-----//
  async getUserOrderProduct(req, res) {
    try {
      const usersOrders = await User.findAll({
        include: [{ model: Order, include: [Product] }],
      });
      res.status(201).send({ mensaje: 'Show Users with Orders', usersOrders });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: ' We had a problem looking for Users with orders ' });
    }
  },
  //-----Logout usuario-----//
  async logout(req,res){
    try {
      await Token.destroy({
        where:{
          [Op.and] : [
            {UserId: req.user.id},
            {token: req.headers.authorization}
          ]
        }
      });
      res.send({message: 'User disconnected...'})
    } catch (error) {
      console.log(error)
      res.status(500).send({message: 'We had an issue loging out...'})
    }
  }
};

module.exports = UserController;
