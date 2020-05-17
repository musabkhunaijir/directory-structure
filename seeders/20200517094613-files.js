'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('files', [{
      name: 'index.html',
      directory_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'java class',
      directory_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('files', null, {});
  }
};
