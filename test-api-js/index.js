var express = require("express");
var app = express();

app.use(express.json());
var todoservice = require("./todo.service.js");
let todo_service = new todoservice();

app.get("/todolist", function (req, res) {
  console.log("API called with GET:" + req.url);
  res.json(todo_service.get_todos());
});

// Add more api calls here for each requirement

// app.listen(3001, function () {
//   console.log(" app listening on port 3001!");
// });

module.exports = app;
