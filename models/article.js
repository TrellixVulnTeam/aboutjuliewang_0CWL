const mongoose = require('mongoose')

// Create articles schema and pass columns an article should have(title, description, etc.)
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    markdown:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: () => Date.now() 
    }
})

// Create a table in the database named "Article": Export model by passing the name of the database (i.e. Article) and the schema. 
module.exports = mongoose.model('Article', articleSchema) 