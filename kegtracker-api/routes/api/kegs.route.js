var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var KegController = require('../../controllers/keg.controller');


// Map each API to the Controller FUnctions

router.get('/', KegController.getTodos)

router.post('/', KegController.createTodo)

router.put('/', KegController.updateTodo)

router.delete('/:id',KegController.removeTodo)


// Export the Router

module.exports = router;