const mongoose = require('mongoose')

// this defines what each checkin document should look like
const checkinSchema = new mongoose.Schema({
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Goal',
    required: true
  },
  update: {
    type: String,
    required: true,
    minlength: 3
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Checkin', checkinSchema)
