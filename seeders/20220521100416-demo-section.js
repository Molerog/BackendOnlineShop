'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sections', [
      {
        section: 'Rock',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'New-wave',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        section: 'Alternative',
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
