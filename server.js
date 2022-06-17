if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
// const bcrypt = require('bcrypt')
const User = require('./models/user')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const projectRouter = require('./routes/projects')
const userRouter = require('./routes/users')
const initializePassport = require('./user_auth/passport-config')
const { isLoggedIn, isLoggedOut } = require('./user_auth/basicAuth')

// db
mongoose.connect('mongodb://127.0.0.1/blog')

// middleware
app.set('view engine','ejs')
app.use(express.static("public"))
app.use(session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: false
  }))
  app.use(express.urlencoded({ extended: false }))
  app.use(methodOverride('_method'))
  app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


// NAVIGATION PAGES

// app.post('/users/login', passport.authenticate('local', {
//     successRedirect: '/users',
//     failureRedirect: 'login',
//     failureFlash: true
//   }))
  
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/resume',(req,res) => {
    res.render('resume')
})

app.get('/logout', async function (req, res) {
    req.logout();
    res.redirect('/users/login');
  });

//  Get articles from model and sort by most recent
app.get('/articles',async (req,res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'})
    res.render('articles/index', {articles : articles})
})


// app.post('/users/login', checkNotAuthenticated, passport.authenticate('local', {
//     successRedirect: '/users',
//     failureRedirect: '/users/register',
//     failureFlash: true
//   }))

app.use('/articles', articleRouter)
app.use('/users', userRouter)


// projects route
app.use('/projects', projectRouter)



app.listen(3000)