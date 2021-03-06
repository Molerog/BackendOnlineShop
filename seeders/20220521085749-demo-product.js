'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [
      {
        product: 'One Plus 10 Pro',
        price: 825,
        SectionId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Xiaomi MI 11 Lite',
        price: 289,
        SectionId: 1,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Iphone 13',
        price: 815,
        SectionId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'One Plus Nord 2',
        price: 399,
        SectionId: 1,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Xiaomi Redmi 9',
        price: 175,
        SectionId: 1,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Samsung Galaxy S22 ULTRA',
        price: 999,
        SectionId: 1,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Apple Ipad Pro 12.9',
        price: 995,
        SectionId: 2,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Samsung Galaxy Tab',
        price: 1025,
        SectionId: 2,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Xiaomi Pad 5 Pro',
        price: 553,
        SectionId: 2,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Lenovo Yoga Tab 13',
        price: 499,
        SectionId: 2,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Chuwi HiPad X',
        price: 160,
        SectionId: 2,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'HP OMEN 16-b0044',
        price: 1499,
        SectionId: 4,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'MSI KATANA GF66',
        price: 1289,
        SectionId: 4,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Asus Zenbook 14',
        price: 899,
        SectionId: 4,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Lenovo IdeaPad 5',
        price: 699,
        SectionId: 4,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Lenovo IdeaPad 3',
        price: 569,
        SectionId: 4,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Apple Watch series 7 ',
        price: 459,
        SectionId: 3,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Garmin Fenix 6',
        price: 379,
        SectionId: 3,
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Xiaomi mIband 6',
        price: 39,
        SectionId: 3,
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Samsung Galaxy Watch 4',
        price: 175,
        SectionId: 3,
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product: 'Xiaomi Redmi Watch 2',
        price: 59,
        SectionId: 3,
        CategoryId: 3,
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
