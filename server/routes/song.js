var express = require('express');
var router = express.Router();
const {songSuggestion} = require('../controllers/song.controller')
/* GET home page. */
router.get('/', songSuggestion)

module.exports = router;
