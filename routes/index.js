const express = require('express')
const router = express.Router()
const Article = require('../models/article')


router.get ('/', async (req,res) => {
    res.render('test')
})

let article = Article.find();

module.exports = router;