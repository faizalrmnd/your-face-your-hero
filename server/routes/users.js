const express = require('express')
const router = express.Router()
const{
  authenticationLogin
} = require('../controllers/login.controller')


/* GET users listing. */
router.post('/login', authenticationLogin)

module.exports = router
