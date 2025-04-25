// bring in the tools we need
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user') // adjust path if needed

// load the .env file so we can use MONGO_URI
dotenv.config()

// connect to the database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connected for seeding')
    return seedUsers()
  })
  .catch((err) => {
    console.error('connection error:', err)
  })

// this function will clear out old users and add new sample users
async function seedUsers() {
  try {
    // remove all existing users (optional but helpful for clean reset)
    await User.deleteMany()

    // sample users that feel realistic and human
    const users = [
      {
        username: "emily_dev",
        email: "emily.tran@example.com",
        firstName: "Emily",
        lastName: "Tran",
        role: "frontend developer",
        location: "Seattle, WA",
        totalGoals: 6,
        completedGoals: 3,
        streakCount: 7
      },
      {
        username: "daniel_codes",
        email: "daniel.james@example.com",
        firstName: "Daniel",
        lastName: "James",
        role: "backend engineer",
        location: "Austin, TX",
        totalGoals: 4,
        completedGoals: 1,
        streakCount: 2
      },
      {
        username: "nina_qa",
        email: "nina.patel@example.com",
        firstName: "Nina",
        lastName: "Patel",
        role: "qa tester",
        location: "Chicago, IL",
        totalGoals: 5,
        completedGoals: 5,
        streakCount: 12
      },
      {
        username: "omar_pm",
        email: "omar.hassan@example.com",
        firstName: "Omar",
        lastName: "Hassan",
        role: "it project manager",
        location: "New York, NY",
        totalGoals: 3,
        completedGoals: 1,
        streakCount: 1
      },
      {
        username: "rachel_designs",
        email: "rachel.kim@example.com",
        firstName: "Rachel",
        lastName: "Kim",
        role: "ux/ui designer",
        location: "San Francisco, CA",
        totalGoals: 8,
        completedGoals: 6,
        streakCount: 9
      }
    ]

    // insert the users into the database
    await User.insertMany(users)
    console.log('users seeded successfully')
    process.exit()
  } catch (err) {
    console.error('seeding error:', err.message)
    process.exit(1)
  }
}
