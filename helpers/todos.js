var db = require("../models");

exports.getTodos = function(req, res) {
  db.Todo.find()
    .then(found => {
      res.send(found);
    })
    .catch(err => console.log(err));
};

exports.createTodos = function(req, res) {
  db.Todo.create(req.body)
    .then(function(newTodo) {
      res.status(201).json(newTodo);
    })
    .catch(err => res.send(err));
};

exports.getOneTodo = function(req, res) {
  db.Todo.findById(req.params.todoId)
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
};

exports.updateTodo = function(req, res) {
  db.Todo.findByIdAndUpdate(req.params.todoId, req.body)
    .then(function(todo) {
      res.json(todo);
    })
    .catch(function(err) {
      res.send(err);
    });
};

exports.deleteTodo = function(req, res){
  db.Todo.findByIdAndRemove(req.params.todoId)
  .then(function(todo){
    res.json(todo)
  })
  .catch(function(err){
    res.send(err);
  })
}

module.exports = exports;
