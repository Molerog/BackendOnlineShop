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
        UserId: 3,
        ProductId: 4,
        review: 'No comment',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        ProductId: 5,
        review: 'Lo amo',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 5,
        ProductId: 6,
        review: 'De Samsung desde pequeñito',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        ProductId: 7,
        review: 'Soy un AppleBOY',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 8,
        review: 'No ha cumplido mis expectativas',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        ProductId: 9,
        review: 'Xiaomi Fan, amo esta marca',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 5,
        ProductId: 10,
        review: 'Lenovo podría acabar mejor sus products',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        ProductId: 11,
        review: 'Nunca Mais Chuwi',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 12,
        review: 'ImPresionante, HP en estado Puro, un ciclón',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        ProductId: 13,
        review: 'Top',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 5,
        ProductId: 14,
        review: 'Es muy ZEN',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        ProductId: 15,
        review: 'Me gusta más este modelo que el superior',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        ProductId: 16,
        review: 'Lo he comprado para mi primo y está muy contento',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 17,
        review: 'Es el líder del mercado',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 2,
        ProductId: 18,
        review:
          'Un poco descontento, cómpralo sólo si lo vas a utilizar para running',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 1,
        ProductId: 19,
        review: 'Cumple y poco más',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 4,
        ProductId: 20,
        review: 'Genial',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserId: 3,
        ProductId: 21,
        review: 'La batería dura un mes',
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
