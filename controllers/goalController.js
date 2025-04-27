// bringing goal model
const Goal = require('../models/goal')

// creating a new goal
const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body)
    res.status(201).json(goal)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// get all goals
const getGoals = async (req, res) => {
  try {
        // find all goals in the database
    const goals = await Goal.find()
    res.json(goals)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// get one goal by ID
const getGoalById = async (req, res) => {
  try {
        // find a single goal by id
    const goal = await Goal.findById(req.params.id)
    if (!goal) return res.status(404).json({ error: 'Goal not found' })
    res.json(goal)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// update a goal
const updateGoal = async (req, res) => {
  try {
    const updated = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!updated) return res.status(404).json({ error: 'Goal not found' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// delete a goal
const deleteGoal = async (req, res) => {
  try {
    const deleted = await Goal.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Goal not found' })
    res.json({ message: 'Goal deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// export all the controller functions
module.exports = {
  createGoal,
  getGoals,
  getGoalById,
  updateGoal,
  deleteGoal
}
