'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sections', [
      {
        section: 'Mobile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Tablet',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Wearable',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Laptops',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
