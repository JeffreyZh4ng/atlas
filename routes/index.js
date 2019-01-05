const express = require('express');
const router = express.Router();

const {loginUser, loginSubmit, registerUser, registerSubmit} = require('./login');
const {loadHomePage} = require('./home');

router.get('/login', loginUser);
router.post('/login/submit', loginSubmit);
router.get('/login/register', registerUser);
router.post('/login/register/submit', registerSubmit);

router.get('/home', loadHomePage);

module.exports = router;
