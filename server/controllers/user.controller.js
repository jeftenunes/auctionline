const db = require('../../config/db/sequelize.js');
const itemController = require('./item.controller.js');
const ItemTypes = require('../models/constants/itemtype.js').ItemType;

const User = db.User;
const Item = db.Item;

exports.login = (req, res, next) =>  {
    User.findOne({where: {userName: req.body.username.toLowerCase()}, include: { model: Item, as: 'items' }})
        .then((user) => {
            if(user){
                user.loggedIn = true;
                user.save().then(logged => res.json(logged));
            } else {
                User.create({
                    userName: req.body.username.toLowerCase(),
                    loggedIn: true,
                    items: itemController.createDefaultInventory()
                }, {
                    include: [{
                        model: Item,
                        as: 'items'
                    }]
                })
                .then((newUser) => res.json(newUser));
            }
        });
}