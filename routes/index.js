const express = require('express');
const router = express.Router();

home_page = require('./home-page');
login = require('./login');

router.get('/', home_page);
router.get('/login', login);

module.exports = router;
