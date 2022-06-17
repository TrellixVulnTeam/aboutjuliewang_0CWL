const mongoose = require('mongoose')
const bcrypt = require('bcrypt')



const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    validate: {
      validator: v => v == 'admin'|| v== 'basic',
      message: props => `${props.value} is an invalid Role.`
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }

})



module.exports = mongoose.model('User', userSchema)

