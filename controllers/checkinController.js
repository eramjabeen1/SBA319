// bringing in the checkin model to communicate with the db
const Checkin = require('../models/checkin')

// create a new checkin
const createCheckin = async (req, res) => {
  try {
    const checkin = await Checkin.create(req.body)
    res.status(201).json(checkin)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// get all checkins
const getCheckins = async (req, res) => {
  try {
    const checkins = await Checkin.find()
    res.json(checkins)
  } catch (err) {
    // if theres an error with the db sending 500
    res.status(500).json({ error: err.message })
  }
}

// get one checkin by ID
const getCheckinById = async (req, res) => {
  try {
    const checkin = await Checkin.findById(req.params.id)
    if (!checkin) return res.status(404).json({ error: 'Checkin not found' })
    res.json(checkin)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

// update a checkin
const updateCheckin = async (req, res) => {
  try {
    const updated = await Checkin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!updated) return res.status(404).json({ error: 'Checkin not found' })
    res.json(updated)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

// delete a checkin
const deleteCheckin = async (req, res) => {
  try {
    const deleted = await Checkin.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: 'Checkin not found' })
    res.json({ message: 'Checkin deleted' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

//// exporing all the checkin route funcs so othe files can use em 
module.exports = {
  createCheckin,
  getCheckins,
  getCheckinById,
  updateCheckin,
  deleteCheckin
}
