const express = require("express");
const routes = express.Router();
const todoController = require("../controllers/todos");
routes.get("/all", todoController.getAllTodos);
routes.post("/add", todoController.addTodo);
routes.delete("/delete/:id", todoController.deleteTodo);
routes.put("/completed/:id", todoController.todoCompleted);

module.exports = routes;
