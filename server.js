const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
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

//  Articles Display Page
app.get('/articles',(req,res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'test description'
    },
    {   title: 'Test Article 2 ',
        createdAt: new Date(),
        description: 'test description 2 '
    }]
    res.render('articles/index', {articles : articles})
})

app.use(express.urlencoded({ extended: false }))

app.use('/articles', articleRouter)


// projects route
app.use('/projects', projectRouter)
app.listen(3000)
