const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
//const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

const app = express();

// Passport Config
//require('./config/passport')(passport);

// DB Config
const db = require('./db/schema');

const  usercontroller = require('./controllers/users')



// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));
//app.use('/users',require('./routes/users'))
// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Passport middleware
//app.use(passport.initialize());
//app.use(passport.session());

// Connect flash
///app.use(flash());

// Global variables
/*app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
*/
app.post('/register',usercontroller.post({

}))