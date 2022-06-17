if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
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
mongoose.connect(process.env.DATABASE_URL)

// middleware
app.set('view engine','ejs') 
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static("public"))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(express.urlencoded({ extended: false }))
  app.use(methodOverride('_method'))
  app.use(flash())
app.use(passport.initialize())
app.use(passport.session())


  
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/about',(req,res) => {
    res.render('about')
})



app.get('/logout', async function (req, res) {
    req.logout();
    res.redirect('/users/login');
  });

  app.get('/test',(req,res) => {
    res.render('test')
})

app.use('/articles', articleRouter)
app.use('/users', userRouter)


// projects route
app.use('/projects', projectRouter)



app.listen(3000)