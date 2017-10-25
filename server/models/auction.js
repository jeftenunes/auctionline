'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const Auction = sequelize.define('Auction', {
    quantity: DataTypes.INTEGER,
    minimumBid: DataTypes.DECIMAL
  });

  Auction.associate = (models) => {

    Auction.hasOne(models.Item, {
      foreignKey: {
        name: 'id',
        allowNull: false,
      }, 
      as: 'item'
    });

    // Auction.hasMany(models.Bid, {
    //   foreignKey: 'bidId',
    //   as: 'bids'
    // });

    Auction.belongsTo(models.User, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE'
    });
  };

  return Auction;
};