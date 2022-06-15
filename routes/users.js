const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const users = []

router.get('/', (req, res) =>
{
    res.render('users', {name: 'Julie'})
})

router.get('/login', (req, res) =>
{
    res.render('users/login')
})


router.post('/login', (req, res) =>
{
})
 
// register users
router.get('/register', (req, res) =>
{
    res.render('users/register')
})

router.post('/register', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        username: req.body.username,
        password: hashedPassword
      })
      res.redirect('/users/login')
    } catch {
      res.redirect('/users/register')
    }
    console.log(users)
  })

module.exports = router