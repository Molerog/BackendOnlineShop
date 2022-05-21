'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Orders', [
      {
        order_num: 1 ,
        date: "1987-07-25" ,
        UserId: 1,
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
