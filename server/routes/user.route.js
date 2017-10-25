const express = require('express');
const controller = require('../controllers/user.controller.js');

const router = express.Router();

router.route('/')
    .post(controller.login);

module.exports = router;