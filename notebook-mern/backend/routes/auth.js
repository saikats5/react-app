const express = require('express')
const User = require('../models/User')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')

//Create a user using POST '/api/auth/createuser'. No login required
router.post(
  '/createuser',
  [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(req.body.password, salt)
    try {
      let user = await User.findOne({
        email: req.body.email,
      })
      if (user) {
        return res
          .status(400)
          .json({ error: 'Sorry a user with this email already exists' })
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      })
      res.json(user)
    } catch (err) {
      console.log('=========>>>', err.message)
      res.status(500).send('Some Error Occured')
    }
  }
)
module.exports = router
