const express = require('express')
const Article = require('../models/article')
const { isLoggedIn, isLoggedOut} = require('../user_auth/basicAuth')
const router = express.Router()
router.use(setUser)


router.get('/',async (req,res) => {
    const articles = await Article.find().sort({createdAt: 'desc'})
    const featuredArticles =  await Article.find({featured: "isFeatured"})
    res.render('articles', {articles : articles, title: "Blog", featuredArticles: featuredArticles})
}) 

router.get('/edit/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.render('articles/edit', { article: article })
})

router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
  })
  
router.get('/:slug', async (req,res) => {
    const article = await Article.findOne({slug: req.params.slug})
    if (article == null) res.redirect('/')
    res.render('articles/show', { article: article, title: "Blog" })
})

router.post('/', async (req, res, next) =>  {
    req.article = new Article()
    next()
}, saveArticleAndRedirect('new'))


router.put('/:id', async (req, res, next) =>  {
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))


router.delete('/:id', isLoggedIn, async (req,res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.redirect('/articles')
})


function saveArticleAndRedirect(path) {
    return async (req, res) => {
      let article = req.article
      article.title = req.body.title
      article.description = req.body.description
      article.markdown = req.body.markdown
      if(req.body.featured) {
        article.featured = req.body.featured
      } else {
        article.featured = 'isNotFeatured'
      }
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