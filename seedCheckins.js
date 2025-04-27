// bring in the tools 
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Checkin = require('./models/checkin')

// load environment variables
dotenv.config()

// connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connected for checkin seeding')
    return seedCheckins()
  })
  .catch((err) => {
    console.error('connection error:', err)
    process.exit(1)
  })

// shortcut: real goal ids from your goals collection
const goalIds = [
    '680e992ffbdc8fcce80c2b99',
    '680e992ffbdc8fcce80c2b9a',
    '680e992ffbdc8fcce80c2b9b',
    '680e992ffbdc8fcce80c2b9c',
    '680e992ffbdc8fcce80c2b9d',
    '680e992ffbdc8fcce80c2b9e',
    '680e992ffbdc8fcce80c2b9f',
    '680e992ffbdc8fcce80c2ba0',
    '680e992ffbdc8fcce80c2ba1',
    '680e992ffbdc8fcce80c2ba2',
    '680e992ffbdc8fcce80c2ba3',
    '680e992ffbdc8fcce80c2ba4',
    '680e992ffbdc8fcce80c2ba5',
    '680e992ffbdc8fcce80c2ba6',
    '680e992ffbdc8fcce80c2ba7'
  ]
  

// define the sample checkins
const checkins = [
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'completed half of my portfolio project'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'finished javascript arrays section'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'scheduled aws exam date'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'attended my first tech meetup'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'applied to two companies this week'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'react todo app almost ready'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'completed sql joins practice'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'earned scrum fundamentals certification'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'sent linkedin requests to recruiters'
  },
  {
    goalId: goalIds[Math.floor(Math.random() * goalIds.length)],
    update: 'added 3 new projects to linkedin profile'
  }
]

// function that resets and seeds checkins
async function seedCheckins() {
  try {
    await Checkin.deleteMany()
    await Checkin.insertMany(checkins)
    console.log('checkins seeded successfully')
    process.exit()
  } catch (err) {
    console.error('seeding error:', err.message)
    process.exit(1)
  }
}
