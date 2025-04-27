// bring in the tools
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Goal = require('./models/goal')
dotenv.config()

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('mongodb connected for goal seeding')
    return seedGoals()
  })
  .catch((err) => {
    console.error('connection error:', err)
    process.exit(1)
  })

// shortcut: real user ids from your users collection
const userIds = [
  '680e960fb0a9018e54a6b864',
  '680e960fb0a9018e54a6b865',
  '680e960fb0a9018e54a6b866',
  '680e960fb0a9018e54a6b867',
  '680e960fb0a9018e54a6b868',
  '680e960fb0a9018e54a6b869',
  '680e960fb0a9018e54a6b86a',
  '680e960fb0a9018e54a6b86b',
  '680e960fb0a9018e54a6b86c',
  '680e960fb0a9018e54a6b86d',
  '680e960fb0a9018e54a6b86e',
  '680e960fb0a9018e54a6b86f',
  '680e960fb0a9018e54a6b870',
  '680e960fb0a9018e54a6b871',
  '680e960fb0a9018e54a6b872'
]

// define the sample goals
const goals = [
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'build portfolio website',
    description: 'create a personal portfolio to showcase my projects',
    category: 'project',
    priority: 'high',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'complete javascript course',
    description: 'finish freeCodeCamp javascript certification',
    category: 'learning',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'get aws cloud certification',
    description: 'pass the aws certified cloud practitioner exam',
    category: 'certification',
    priority: 'high',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'attend a tech meetup',
    description: 'network with local developers in my city',
    category: 'networking',
    priority: 'low',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'apply to 5 frontend jobs',
    description: 'submit 5 strong frontend engineer job applications',
    category: 'career',
    priority: 'high',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'build a react todo app',
    description: 'practice hooks and state management',
    category: 'project',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'complete sql basics course',
    description: 'learn basic querying and database design',
    category: 'learning',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'earn scrum fundamentals certification',
    description: 'understand agile and scrum basics',
    category: 'certification',
    priority: 'low',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'connect with 3 recruiters',
    description: 'send linkedin connection requests to recruiters',
    category: 'networking',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'update linkedin profile',
    description: 'highlight projects, skills, and certifications',
    category: 'career',
    priority: 'high',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'create a github readme portfolio',
    description: 'build a github profile with pinned repositories',
    category: 'project',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'finish responsive web design course',
    description: 'improve mobile-friendly coding skills',
    category: 'learning',
    priority: 'medium',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'practice 30 javascript coding challenges',
    description: 'build daily logic problem-solving habits',
    category: 'learning',
    priority: 'high',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'join a tech community',
    description: 'become an active member in a developer group',
    category: 'networking',
    priority: 'low',
    completed: false
  },
  {
    userId: userIds[Math.floor(Math.random() * userIds.length)],
    title: 'attend virtual coding bootcamp event',
    description: 'explore accelerated learning opportunities',
    category: 'networking',
    priority: 'low',
    completed: false
  }
]

// seed function
async function seedGoals() {
  try {
    await Goal.deleteMany()
    await Goal.insertMany(goals)
    console.log('goals seeded successfully')
    process.exit()
  } catch (err) {
    console.error('seeding error:', err.message)
    process.exit(1)
  }
}
