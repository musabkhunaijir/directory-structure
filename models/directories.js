'use strict';
module.exports = (sequelize, DataTypes) => {
  const directories = sequelize.define('directories', {
    name: DataTypes.STRING,
    parent_id: DataTypes.INTEGER
  }, {});
  directories.associate = function (models) {
    // associations can be defined here
    directories.hasMany(models.files, { foreignKey: 'directory_id', as: 'files' });
  };
  return directories;
};