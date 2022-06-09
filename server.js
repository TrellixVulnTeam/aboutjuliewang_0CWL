const express = require('express')
const app = express()

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

// import projects router
const projectRouter = require('./routes/projects')
app.use('/projects', projectRouter)

// import articles router
const articleRouter = require('./routes/articles')
app.use('/articles', articleRouter)


app.listen(3000)
