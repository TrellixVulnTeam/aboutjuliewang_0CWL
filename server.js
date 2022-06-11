const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')
const projectRouter = require('./routes/projects')
const app = express()



mongoose.connect('mongodb://127.0.0.1/blog')
app.use(express.static("public"))
app.set('view engine','ejs')

// NAVIGATION PAGES
app.get('/',(req,res) => {
    res.render('index')
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/resume',(req,res) => {
    res.render('resume')
})

//  Get articles from model and sort by most recent
app.get('/articles',async (req,res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'})
    res.render('articles/index', {articles : articles})
})

app.use(express.urlencoded({ extended: false }))
// overide methods by using the passed parameter ('_method)
app.use(methodOverride('_method'))


app.use('/articles', articleRouter)


// projects route
app.use('/projects', projectRouter)
app.listen(3000)
