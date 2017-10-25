'use strict';
const ItemType = require
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    quantity: DataTypes.INTEGER,
    type: DataTypes.STRING
  });

  Item.associate = (models) => {
    Item.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return Item;
};