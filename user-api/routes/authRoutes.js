const express = require('express');
const {register, login} = require('../controllers/authController');
const {body} = require('express-validator');

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required'),
],register);

router.post('/login', [
    body('email').isEmail(),
    body('password').notEmpty()
],login);

module.exports = router;