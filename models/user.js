const mongoose = require('mongoose')
// this defines what each user document should look like
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3 // means the username must be at least 3 characters
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/ // basic check for email format
  },
  joinedAt: {
    type: Date,
    default: Date.now // sets the date automatically when created
  }
})

// turning the schema into a model that can be used
module.exports = mongoose.model('User', userSchema)
