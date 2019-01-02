const express = require('express');
const router = express.Router();

const {loginUser, registerUser} = require('./login');
const {loadHomePage} = require('./home');

router.get('/login', loginUser);
router.get('/login/register', registerUser);

router.get('/home', loadHomePage);

module.exports = router;
