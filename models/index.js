var mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.connect("mongodb://todoApi:todoApi1@ds233320.mlab.com:33320/todoadvancedbc");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");