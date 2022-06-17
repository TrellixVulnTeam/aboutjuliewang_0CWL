const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const methodOverride = require('method-override')
const User = require('../models/user')
const Article = require('../models/article')
const { isLoggedIn, isLoggedOut } = require('../user_auth/basicAuth')
const initializePassport = require('../user_auth/passport-config')
initializePassport()
 
router.get('/', isLoggedIn, async (req, res) =>
{ 
    const users = await User.find()
    const articles = await Article.find().sort({
      createdAt: 'desc'})
    res.render('users', {
      users: users,
      title: "dashboard",
      articles: articles 
    })
})

router.get('/login', (req, res) => {
  res.render('users/login.ejs')
})


router.get('/register', isLoggedIn, (req, res) => {
  res.render('users/register.ejs')
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/users',
    failureRedirect: 'login',
    failureFlash: true
  }))

router.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    let user = new User({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role
      })
      try {
        user = await user.save()
        res.redirect('/users')
        console.log(user)
  
      } catch (e) {
        console.log(e.message)
        res.redirect('/users/register')
      }
    })

    
// delete
router.delete('/:id', async (req,res) => {
  await User.findByIdAndDelete(req.params.id)
  res.redirect('/users')
  })




module.exports = router
