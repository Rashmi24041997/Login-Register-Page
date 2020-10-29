const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const passport = require('passport');
// Load User model
const User = require('../db/schema');
//const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login',(req, res) => res.render('login'));

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  //console.log(req.body);
  const { name, email, password, password2 } = req.body;
  console.log(req.body);
  res.send('done');
 
});

// Login
router.post('/login', (req, res) => {
 /* passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);*/
  res.render('login');
  console.log("login page");
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
 // req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;