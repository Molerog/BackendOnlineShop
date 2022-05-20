'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Orders', [
      {
        order_num: 2 ,
        date: "1987-07-25" ,
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
