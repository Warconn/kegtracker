var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var KegController = require('../../controllers/keg.controller');


// Map each API to the Controller FUnctions

router.get('/', KegController.getKegs)

router.post('/', KegController.createKeg)

router.put('/', KegController.updateKeg)

router.delete('/:id',KegController.removeKeg)


// Export the Router

module.exports = router;