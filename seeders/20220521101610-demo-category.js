'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Categories', [
      {
        category: "Premium",
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        category: "Medium",
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        category: "Lowcost",
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
