'use strict';
module.exports = (sequelize, DataTypes) => {
  const files = sequelize.define('files', {
    name: DataTypes.STRING,
    directory_id: DataTypes.INTEGER
  }, {});
  files.associate = function (models) {
    // associations can be defined here
    files.belongsTo(models.directories, { foreignKey: 'directory_id', as: 'directory' });
  };
  return files;
};