// bring in mongoose so we can talk to mongodb
const mongoose = require('mongoose')
// load environment
require('dotenv').config()
// function connecting the db
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err.message)
    process.exit(1)  // stop the server if database fails to connect
  }
}

module.exports = connectDB
