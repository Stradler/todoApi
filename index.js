var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send("Hell from root route!");
});

app.use('/api/', todoRoutes);

app.listen(8080, function(){
  console.log("APP IS RUNNING ON PORT" + 8080);
})