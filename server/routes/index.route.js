const express = require('express');
const bidRoutes = require('./bid.route.js');
const userRoutes = require('./user.route.js');
const auctionRoutes = require('./auction.route');

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));
router.use('/auctions', auctionRoutes);
router.use('/users', userRoutes);
router.use('/bids', bidRoutes);

module.exports = router;