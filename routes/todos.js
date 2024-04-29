const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo} = require("../controllers/getTodo")
//define API routes
router.post("/createTodo",createTodo);

module.exports = router;