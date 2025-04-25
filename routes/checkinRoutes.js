const express = require('express')
const router = express.Router()
const {
  createCheckin,
  getCheckins,
  getCheckinById,
  updateCheckin,
  deleteCheckin
} = require('../controllers/checkinController')

router.post('/', createCheckin)
router.get('/', getCheckins)
router.get('/:id', getCheckinById)
router.patch('/:id', updateCheckin)
router.delete('/:id', deleteCheckin)

module.exports = router
