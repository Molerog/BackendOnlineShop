const {User,Order, Product} = require('../models/index');

//-----> Controlador para tabla "User" <------// 

//-----Creación de Usuarios-----//
const UserController = {
    async create(req,res) {
    try {
        const user = await User.create({...req.body})
        res.status(201).send({mensaje: "User added...", user})
    } catch (error) {
        console.log(error);
        res.status(500).send({
            mensaje:
            "We had an issue creating the user..."
        })
    }
    },
//-----Obtiene todos los usuarios-----//
    async getAll(req,res){
        try {
          const users = await User.findAll()
           res.status(201).send({mensaje: 'Search completed...', users})
        } catch (error) {
            console.log(error)
            res.status(500).send({mensaje: "We had an issue searching the table..."})
        }
    },
//-----Obtiene el usuario y su pedido-----//
    async getUserOrderProduct(req, res) {
        try {
          const usersOrders = await User.findAll({
            include: [
                {model: Order, include: [Product] }
              ],
          });
          res.status(201).send({ mensaje: 'Show Users with Orders', usersOrders });
        } catch (error) {
          console.log(error);
          res
            .status(500)
            .send({ mensaje: ' We had a problem looking for Users with orders ' });
        }
      },
}

module.exports = UserController