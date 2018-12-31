const express = require('express');
const router = express.Router();

home_page = require('./home');
login = require('./login');

// router.get('/', home_page);
router.get('/', login);

module.exports = router;
