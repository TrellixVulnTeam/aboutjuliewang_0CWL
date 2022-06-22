if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const flash = require('express-flash')
const session = require('express-session')
const passport = require('passport')
const articleRouter = require('./routes/articles')
const userRouter = require('./routes/users')
const Article = require('./models/article')


// import custom modules for user auth
const initializePassport = require('./user_auth/passport-config')
const { isLoggedIn, isLoggedOut } = require('./user_auth/basicAuth')

// create app & link db
const app = express()
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
app.set('view engine','ejs') 
app.set('layout', 'layouts/layout')

// MIDDLEWARE
app.use(expressLayouts)
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(function (req, res, next) {
  title = "Julie Wang";
  next();
});

// main
app.get('/',async (req,res) => {
    const featuredArticles =  await Article.find({featured: "isFeatured"})
    res.render('index', {title: "Home", featuredArticles: featuredArticles})
})
app.get('/logout', async function (req, res) {
    req.logout();
    res.redirect('/users/login');
  });


app.use('/articles', articleRouter)
app.use('/users', userRouter)
app.listen(process.env.PORT || 3000)