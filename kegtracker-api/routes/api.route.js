var express = require('express')

var router = express.Router()
var kegs = require('./api/kegs.route')


router.use('/kegs', kegs);


module.exports = router;