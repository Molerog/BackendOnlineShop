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
      }
    ])   
  },

  async down (queryInterface, Sequelize) {
  }
};
