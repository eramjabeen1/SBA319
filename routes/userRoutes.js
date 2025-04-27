const express = require('express')
const router = express.Router()
const User = require('../models/user')

// create a new user
router.post('/', async (req, res) => {
  try {
    // create a user from the data sent in the request
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// get all users
router.get('/', async (req, res) => {
  try {
    // find all users in the database
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// get one user by id
router.get('/:id', async (req, res) => {
  try {
    // find user by id from the url
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'user not found' })
    res.json(user)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// update a user
router.patch('/:id', async (req, res) => {
  try {
    // find user by id and update it with new data
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    if (!updatedUser) return res.status(404).json({ error: 'user not found' })
    res.json(updatedUser)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// delete a user
router.delete('/:id', async (req, res) => {
  try {
    // find user by id and remove it
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if (!deletedUser) return res.status(404).json({ error: 'user not found' })
    res.json({ message: 'user deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
