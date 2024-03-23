const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser')
const Notes = require('../model/Notes')
const { body, validationResult } = require('express-validator')

//Route 1: Get all the notes using GET "/api/notes/get". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id })
    res.json(notes)
  } catch (error) {
    console.log('=========>>>', error.message)
    res.status(500).send('Internal Server Error')
  }
})

//Route 2: Add a new note using POST "/api/notes/addnote". Login required
router.post(
  '/addnote',
  fetchuser,
  [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    [
      body('description', 'Description must be atleast 5 characters').isLength({
        min: 5,
      }),
    ],
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      })
      const savedNote = await note.save()
      res.json(savedNote)
    } catch (error) {
      console.log('=========>>>', error.message)
      res.status(500).send('Internal Server Error')
    }
  }
)

module.exports = router
