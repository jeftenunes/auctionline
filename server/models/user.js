'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName:  DataTypes.STRING,
    coinAmount: { type: DataTypes.DECIMAL, defaultValue: 1000.00 },
    loggedIn: { type: DataTypes.BOOLEAN, defaultValue: false }
  });

  User.associate = (models) => {
    User.hasMany(models.Item, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      as: 'items'
    });

    User.hasMany(models.Auction, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      as: 'auctions'
    });
  };

  return User;
};