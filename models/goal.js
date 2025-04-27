const mongoose = require('mongoose')

// this defines what each goal document should look like
const goalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // every goal must belong to a user
  },
  title: {
    type: String,
    required: true,
    minlength: 5 // goal title must be at least 5 characters
  },
  description: {
    type: String  
    // optional notes about the goal
  },
  category: {
    type: String,
    enum: ['certification', 'project', 'learning', 'networking', 'career'],
    index: true // faster searching by category
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium' // most goals start at medium priority
  },
  completed: {
    type: Boolean,
    default: false,
    index: true // faster queries for completed vs incomplete goals
  },
  createdAt: {
    type: Date,
    default: Date.now // set when the goal is created
  }
})
// turning the schema into a model
module.exports = mongoose.model('Goal', goalSchema)
