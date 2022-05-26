'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews', [
      {
        UserId: 1,
        ProductId: 1,
        review: 'Las fotos son fantásticas y el sistema muy fluido',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        ProductId: 2,
        review: 'La combinacion perfecta calidad precio',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        ProductId: 3,
        review: 'Muy caro para lo que es',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 1,
        review: 'Las fotos son fantásticas y el sistema muy fluido',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 1,
        review: 'Las fotos son fantásticas y el sistema muy fluido',
        rating: 5,
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
