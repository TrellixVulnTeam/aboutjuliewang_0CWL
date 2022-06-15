const express = require('express')
const Article = require('../models/article')
const { ROLE, users } = require('../user_auth/data')
const { authUser, authRole } = require('../user_auth/basicAuth')
const router = express.Router()


// 
router.use(express.json())
router.use(setUser)

// NEW ARTICLES
router.get('/new', authUser, (req,res) => {
    res.render('articles/new',{ article: new Article()})
})

router.get('/edit/:id', authUser, async (req,res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

router.get('/:slug', async (req,res) => {
    const article = await Article.findOne({slug: req.params.slug})
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article })
})

router.post('/', async (req, res, next) =>  {
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))


router.put('/:id', async (req, res, next) =>  {
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))

// find an article by its ID in the Article database and delete
router.delete('/:id', authUser, async (req,res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/articles')
})

function saveArticleAndRedirect(path) {
    return async (req, res) => {
      let article = req.article
      article.title = req.body.title
      article.description = req.body.description
      article.markdown = req.body.markdown
      try {
        article = await article.save()
        res.redirect(`/articles/${article.slug}`)
      } catch (e) {
        res.show(console.log(e))
        res.render(`articles/${path}`, { article: article })
      }
    }
}

// middleware to set user
function setUser(req, res, next) {
    const userId = req.body.userId
    if (userId) {
        req.user = users.find(user => user.id === userId)
    }
    next()
}
module.exports = router 