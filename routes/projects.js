const express = require('express')
const router = express.Router()

// Project List
router.get('/',(req,res) => {
    res.render('projects', {title: "Projects & Case Studies"})
})

// R&D Projects
router.get('/r&d-credits',(req,res) => {
    res.render('projects/rd')
})

module.exports = router 