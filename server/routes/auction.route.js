const express = require('express');
const controller = require('../controllers/auction.controller.js');

const router = express.Router();

router.route('/start')
    .post(controller.startAuction);

router.route('/:id')
    .get(controller.get);

router.param('id', controller.load);

module.exports = router;