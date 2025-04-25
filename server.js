// bringing in the tools we need to build the server
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// import routes that handle users..goals..check ins
const userRoutes = require('./routes/userRoutes')
const goalRoutes = require('./routes/goalRoutes')
const checkinRoutes = require('./routes/checkinRoutes')

// loading environment variables from the .env file
dotenv.config()
// connecting to mongodb with the uri from my .env
connectDB()

const app = express()

// middleware this allows me to work with json data in req bodies
app.use(express.json())

// defining my api routes
app.use('/api/users', userRoutes)
app.use('/api/goals', goalRoutes)
app.use('/api/checkins', checkinRoutes)

// this is optional but its for browser checking to see somethin when visiting it 
app.get('/', (req, res) => {
  res.send('api is running')
})

// starting my server & listening
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
