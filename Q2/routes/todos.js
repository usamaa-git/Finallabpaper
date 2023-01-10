var express = require("express");
var todo = require("../models/todos.js");
var router = express.Router();


router.get("/", async function (req, res) {
  let todos = todo.find();
  res.render("todos/list", { product: todos });
});

router.get("/createTodo" , async function (req, res) {
  res.render("./todos/createTodo");
});

router.post("/createTodo", async function (req, res) {
  let todos = new todo(req.body);
  await todos.save();
  res.redirect("/todos");
});

router.get("/delete/:id", async function (req, res) {
  let todos = await todo.findByIdAndDelete(req.params.id);
  res.redirect("/todos");
});