if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

// IMPORT PROGRAMS
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
// auth libraries
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
// import db models
const User = require('./models/user')
const Article = require('./models/article')
// import routes
const articleRouter = require('./routes/articles')
const projectRouter = require('./routes/projects')
const userRouter = require('./routes/users')
// import custom modules for user auth
const initializePassport = require('./user_auth/passport-config')
const { isLoggedIn, isLoggedOut } = require('./user_auth/basicAuth')

// CREATE APP & LINK DB
const app = express()
// connect to DB
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
// templating/layout
app.set('view engine','ejs') 
app.set('layout', 'layouts/layout')

// MIDDLEWARE
// layout
app.use(expressLayouts)
// static files
app.use(express.static("public"))
// parsing form data
app.use(express.urlencoded({ extended: false }))
// override http method
app.use(methodOverride('_method'))
app.use(flash())
// user auth - passport/session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
// set variables for all requests
app.use(function (req, res, next) {
  title = "Julie Wang";
  next();
});

// RENDER VIEWS
app.get('/',(req,res) => {
    res.render('index', {title: "Home"})
})
app.get('/about',(req,res) => {
  res.render('about', {title: "About Me"})
})
app.get('/logout', async function (req, res) {
    req.logout();
    res.redirect('/users/login');
  });
app.get('/test',(req,res) => {
    res.render('test', {title: "test"})
})

// ROUTES
app.use('/articles', articleRouter)
app.use('/users', userRouter)
app.use('/projects', projectRouter)

// 
app.listen(process.env.PORT || 3000)