const express = require('express');
const controller = require('../controllers/bid.controller.js');

const router = express.Router();

router.route('/place-bid')
    .post(controller.placeBid);

module.exports = router;