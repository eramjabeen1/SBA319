const express = require('express')
const router = express.Router()

// bring in all the goal controller functions
const {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal
} = require('../controllers/goalController')

// create a new goal
router.post('/', createGoal)

// get all goals
router.get('/', getGoals)

// get one goal by id
router.get('/:id', getGoalById)

// update a goal
router.patch('/:id', updateGoal)

// delete a goal
router.delete('/:id', deleteGoal)

// export the router so we can use it in server.js
module.exports = router
