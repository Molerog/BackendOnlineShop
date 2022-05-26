'use strict';

const bcrypt = require ('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        name: 'German',
        surname: 'Molero',
        email:'moltorger@gmail.com',
        dni: '44886553Y',  
        role: 'admin',
        password: bcrypt.hashSync('patata', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Xavi',
        surname: 'PaterandCommander',
        email:'antonio@gmail.com',
        dni: '33449923Y', 
        role: 'user',
        password: bcrypt.hashSync('padrenostrum', 10),       
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
      name: 'Vicent',
      surname: 'Vabera',
      email:'varberao@gmail.com',
      dni: '33434923Y',
      role:'admin',
      password: bcrypt.hashSync('zanahoria', 10),     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Imanol',
      surname: 'Superman',
      email:'imanol@gmail.com',
      dni: '33433923Y',
      role:'user',
      password: bcrypt.hashSync('jurassicpark', 10),     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'David',
      surname: 'ElJester',
      email:'arlequin@gmail.com',
      dni: '33433923Y',
      role:'user',
      password: bcrypt.hashSync('patinaje', 10),     
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])   
  },

  async down (queryInterface, Sequelize) {
  }
};
