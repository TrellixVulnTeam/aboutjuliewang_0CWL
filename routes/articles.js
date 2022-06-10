const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    const articles = [{
        title: 'Test Article',
        date: new Date(),
        description: 'test description'
    },
    {   title: 'Test Article 2 ',
        date: new Date(),
        description: 'test description 2 '
    }]

    res.render('blog', {articles : articles})
})

// NEW ARTICLES
router.get('/new',(req,res) => {
    res.render('articles/new')
})

router.post('/',(req, res) =>{

})

module.exports = router