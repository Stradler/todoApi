var express = require("express");
var router = express.Router();
var db = require("../models");
var helper = require("../helpers/todos");

router.route('/')
  .get(helper.getTodos)
  .post(helper.createTodos);

router.route('/:todoId')
  .get(helper.getOneTodo)
  .put(helper.updateTodo)
  .delete(helper.deleteTodo);

module.exports = router;