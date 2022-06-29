const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('../models/user')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.render('users/login')

}

function isLoggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next();
	res.redirect('users');
}


module.exports = {

    isLoggedIn,
    isLoggedOut
}