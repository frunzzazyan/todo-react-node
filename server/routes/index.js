var express = require('express');
var router = express.Router();
const TodoControllers = require("../controllers/TodoControllers.js")
const controllers = new TodoControllers()

router.get('/', controllers.getTodo);
router.patch("/:id", controllers.patchTodo)
router.delete("/:id", controllers.deleteTodo)
module.exports = router;
