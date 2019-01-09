const express = require('express');
const router = express.Router();

const {loginUser, loginSubmit, registerUser, registerSubmit} = require('./login');
const {loadHomePage} = require('./home');
const {createTrip} = require('./create');

router.get('/login', loginUser);
router.post('/login/submit', loginSubmit);
router.get('/login/register', registerUser);
router.post('/login/register/submit', registerSubmit);

router.get('/home', loadHomePage);

router.get('/create', createTrip);

module.exports = router;
