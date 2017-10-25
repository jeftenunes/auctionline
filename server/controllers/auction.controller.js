const db = require('../../config/db/sequelize.js');
const auctionController = require('./auction.controller.js');

const User = db.User;
const Item = db.Item;
const Auction = db.Auction;

exports.startAuction = (req, res, next) =>  {
    const params = {
        userId: req.body.userId,
        itemType: req.body.itemType,
        quantity: req.body.quantity,
        minimumBid: req.body.minimumBid
    };

    User.findById(params.userId,  { include: { model: Item, as: 'items' }})
        .then((user) => {
            if(!user)
                return next(new Error('User does not exists.'));
            console.log(user.get('id', { plain: true }));
            const auctionItem = user.get('items', { plain: true})
                .find((item) => 
                    (item.type === params.itemType));
            if(params.quantity > auctionItem.quantity)
                return next(new Error(`The minimum quantity to start an auction to this item is 
                    ${auctionItem.quantity}`));
            Auction.create({
                quantity: params.quantity,
                minimumBid: params.minimumBid,
                userId: user.get('id', { plain: true })
            });
            res.json(auctionItem);
        });
};

exports.get = (req, res) => {
    return res.json(req.auction);
};

exports.load = (req, res, next, id) => {
    Auction.findById(id,  { include: [{ model: Item, as: 'item' }, { model: User }]})
        .then(auction => {
            req.auction = auction;
            next();
        });
};