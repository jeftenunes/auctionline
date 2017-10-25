'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bid = sequelize.define('Bid', {
    amount: DataTypes.DECIMAL
  });

  Bid.associate = (models) => {
    Bid.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  return Bid;
};