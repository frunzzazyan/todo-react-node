var express = require('express');
var router = express.Router();

const SignUpControllers = require("../controllers/SignUpControllers.js")
const controllers = new SignUpControllers()
/* GET users listing. */
router.post('/', controllers.postUser);

module.exports = router;