const db = require('../../config/db/sequelize.js');
const ItemTypes = require('../models/constants/itemtype.js').ItemType;

const Item = db.Item;

exports.createDefaultInventory = () => initDefaultInventory();

function initDefaultInventory() {
    const breads = {
        type: ItemTypes.Bread.description,
        quantity: 30
    };

    const carrots = {
        type: ItemTypes.Carrot.description,
        quantity: 18
    };

    const diamond = {
        type: ItemTypes.Diamond.description,
        quantity: 1
    };

    return [breads, carrots, diamond];
}