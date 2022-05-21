'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        product: "laptop",
        price: 800,
        SectionId: 2,
        CategoryId: 2,
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
