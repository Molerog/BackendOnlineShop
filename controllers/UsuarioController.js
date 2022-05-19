const {Usuario} = require('../models/index.js');

const UsuarioController = {
    async create(req,res) {
    try {
        await Usuario.create({...req.body})
        req.body.role = "user"
        res.status(201).send({mensaje: "Usuario creado con éxito", Usuario})
    } catch (error) {
        console.log(err);
        res.status(500).send({
            mensage:
            "Ha habido un problema al crear al cliente"
        })
    }
    }
}

module.exports = UsuarioController