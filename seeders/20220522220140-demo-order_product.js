'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Order_Products', [
      {
        OrderId: 1,
        ProductId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 1,
        ProductId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 3,
        ProductId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 4,
        ProductId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 4,
        ProductId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 1,
        ProductId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 1,
        ProductId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 3,
        ProductId: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 4,
        ProductId: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 5,
        ProductId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 1,
        ProductId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 5,
        ProductId: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 3,
        ProductId: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 1,
        ProductId: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        OrderId: 2,
        ProductId: 21,
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
