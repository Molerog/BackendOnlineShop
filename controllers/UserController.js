const { User, Order, Product, Token, Sequelize } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../config/config.json')['development'];
const {Op} = Sequelize;
const transporter = require("../config/nodemailer");

//-----Creación de Usuarios-----//
const UserController = {
  async create(req, res, next) {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const user = await User.create({ 
          attributes: {exclude: ['createdAt','updatedAt','confirmed']},
          ...req.body,
          password : hash,
          confirmed:true,
          role:'user'          
         });
        //  const url ='http://localhost:3000/users/confirm/'+ req.body.email
        //  await transporter.sendMail({
        //   to: req.body.email,
        //   subject: "Confirme su registro",
        //   html: `<h3>Bienvenido, estás a un paso de registrarte </h3>
        //   <a href="${url}"> Click para confirmar tu registro</a>
        //   `
        // });
        res.status(201).send({ message: 'We sent you an email to confirm your register...', user });
    } catch (error) { 
      error.origin = "User"
      next(error)
    }
  }, 

  async confirm(req,res){
    try {
      const user = await User.update({confirmed:true},{
        where:{
          email: req.params.email
        }
      })
      res.status(201).send( "Usuario confirmado con exito");
    } catch (error) {
      console.error(error)
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
          .send({ message: 'User or password incorrect...' });
      }
      if(!user.confirmed){
        return res.status(400).send({message: 'You may confirm your email'});
      }
      const isMatch = bcrypt.compareSync(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(400)
          .send({ message: 'User or password incorrect...' });
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
      const users = await User.findAll({
        attributes: {exclude: ['createdAt','updatedAt','confirmed']},
      });
   
      res.status(201).send({ mensaje: 'Search completed...', users });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ mensaje: 'We had an issue searching the table...' });
    }
  },
  //-----Obtiene el usuario y su pedido-----//
  async getUserOrderProduct(req, res, next) {
    try {
      const usersOrders = await User.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'confirmed', 'password'],
        },
        include: [{ 
          model: Order, 
          attributes: ['order_num'],
          include: [{
            model: Product,
            attributes: ['product','price'],
            through:{attributes: []
            }
          }
        ]
      }
    ],
      });
      res.status(201).send({ mensaje: 'Show Users with Orders', usersOrders });
    } catch (error) {
      error.origin = 'User'
      next(error)
    }
  },
  //-----Logout usuario-----//
  async logout(req,res,next){
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
      error.origin = 'User'
      next(error)
    }
  },
  async getUserInfo(req, res) {
    try {
      const user = await User.findOne({
        // attributes: {exclude: ['createdAt','updatedAt','confirmed']},
        where: {
          id: req.user.id,
        },
        include: [{ 
          model: Order, 
          attributes: ['order_num','date'],
          include: [{
            model: Product,
            attributes: ['product','price'],
            through:{attributes: []
            }
          }
        ]
      }
    ],
      });
      if (!user) {
        return res
          .status(400)
          .send({ message: 'User or Password incorrect', user });
      }
      res.status(201).send({ message: 'User find', user });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: 'We had an issue searching the user...' });
    }
  },
};

module.exports = UserController;
