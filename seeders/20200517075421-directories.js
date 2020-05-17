'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('directories', [{
      name: 'courses',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'books',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'web course',
      parent_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'java book',
      parent_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('directories', null, {});
  }
};
