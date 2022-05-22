'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Users', [
      {
        name: 'German',
        surname: 'Molero',
        email:'moltorger@gmail.com',
        dni: '44886553Y',        
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antonio',
        surname: 'Molero',
        email:'antonio@gmail.com',
        dni: '33449923Y',        
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
      name: 'Vicent',
      surname: 'vabera',
      email:'varberao@gmail.com',
      dni: '33434923Y',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])   
  },

  async down (queryInterface, Sequelize) {
  }
};
