var express = require('express');
var router = express.Router();
const getHero = require('../controllers/hero.controller')
/* GET home page. */
router.post('/', getHero)

module.exports = router;
