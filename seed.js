// bringing in the tools we need to build the seeder
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user') // adjust path if needed

// loading env variables so we can use the uri safely
dotenv.config()

// connecting to the mongodb database
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connected for seeding')
    return seedUsers()
  })
  .catch((err) => {
    console.error('connection error:', err.message)
  })

// this function resets user data with sample tech users
async function seedUsers() {
  try {
    // clear out existing users (optional but useful for testing)
    await User.deleteMany()

    // sample users with realistic info for the tech bucket list app
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
        },
        {
          username: "leo_data",
          email: "leo.garcia@example.com",
          firstName: "Leo",
          lastName: "Garcia",
          role: "data analyst",
          location: "Miami, FL",
          totalGoals: 5,
          completedGoals: 2,
          streakCount: 4
        },
        {
          username: "sara_cyber",
          email: "sara.lee@example.com",
          firstName: "Sara",
          lastName: "Lee",
          role: "cybersecurity analyst",
          location: "Boston, MA",
          totalGoals: 7,
          completedGoals: 3,
          streakCount: 5
        },
        {
          username: "mike_cloud",
          email: "mike.johnson@example.com",
          firstName: "Mike",
          lastName: "Johnson",
          role: "cloud engineer",
          location: "Denver, CO",
          totalGoals: 6,
          completedGoals: 4,
          streakCount: 6
        },
        {
          username: "lisa_mobile",
          email: "lisa.wang@example.com",
          firstName: "Lisa",
          lastName: "Wang",
          role: "mobile developer",
          location: "Los Angeles, CA",
          totalGoals: 5,
          completedGoals: 2,
          streakCount: 4
        },
        {
          username: "ahmed_devops",
          email: "ahmed.musa@example.com",
          firstName: "Ahmed",
          lastName: "Musa",
          role: "devops engineer",
          location: "Houston, TX",
          totalGoals: 4,
          completedGoals: 1,
          streakCount: 2
        },
        {
          username: "jessica_ml",
          email: "jessica.cho@example.com",
          firstName: "Jessica",
          lastName: "Cho",
          role: "machine learning engineer",
          location: "San Diego, CA",
          totalGoals: 5,
          completedGoals: 3,
          streakCount: 6
        },
        {
          username: "ryan_game",
          email: "ryan.smith@example.com",
          firstName: "Ryan",
          lastName: "Smith",
          role: "game developer",
          location: "Portland, OR",
          totalGoals: 7,
          completedGoals: 5,
          streakCount: 8
        },
        {
          username: "fatima_web",
          email: "fatima.ali@example.com",
          firstName: "Fatima",
          lastName: "Ali",
          role: "fullstack web developer",
          location: "Atlanta, GA",
          totalGoals: 6,
          completedGoals: 3,
          streakCount: 5
        },
        {
          username: "tyler_support",
          email: "tyler.evans@example.com",
          firstName: "Tyler",
          lastName: "Evans",
          role: "technical support specialist",
          location: "Phoenix, AZ",
          totalGoals: 3,
          completedGoals: 2,
          streakCount: 2
        },
        {
          username: "ana_robotics",
          email: "ana.martinez@example.com",
          firstName: "Ana",
          lastName: "Martinez",
          role: "robotics engineer",
          location: "Dallas, TX",
          totalGoals: 4,
          completedGoals: 1,
          streakCount: 3
        }
      ]
      
    // insert new users into the db
    await User.insertMany(users)
    console.log('users seeded successfully')
    process.exit()
  } catch (err) {
    console.error('seeding error:', err.message)
    process.exit(1)
  }
}
