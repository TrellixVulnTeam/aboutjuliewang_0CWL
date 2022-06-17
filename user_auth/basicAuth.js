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

function authUser(req,res,next) {
    if(req.user == null) {
        res.status(403)
        res.redirect('/users/login')
    }
    next()
}

function authRole(role) {
    return (req,res, next) => {
        if(req.user.role !== role) {
            res.status(401)
            res.send("User not allowed")
        }   
         next()
    }
}


function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }


module.exports = {
    authUser,
    authRole,
    checkAuthenticated,
    checkNotAuthenticated,
    isLoggedIn,
    isLoggedOut
}