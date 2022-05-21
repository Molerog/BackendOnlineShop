'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        product: "laptop",
        price: 800,
        SectionId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        product: "phone",
        price: 500,
        SectionId: 2,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        product: "watch",
        price: 2000,
        SectionId: 3,
        CategoryId: 3,
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
