'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert ( 'Products', [
      {
        product: "MSI",
        price: 1500,
        SectionId: 4,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        product: "Iphone",
        price: 3000,
        SectionId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        product: "AppleWatch",
        price: 2000,
        SectionId: 3,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()   
      },
      {
        product: "TabletChino",
        price: 150,
        SectionId: 2,
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
