const Todo = require("../models/todo");

module.exports.getAllTodos = (req, res) => {
  Todo.findAll()
    .then((result) => {
      console.log(result);
      const newData = result.map((item) => item.dataValues);
      res.json(newData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.addTodo = (req, res) => {
  const { title, description } = req.body;
  Todo.create({
    title: title,
    description: description,
    completed: false,
  })
    .then((result) => {
      console.log(result);
      res.json(result.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  Todo.findByPk(id)
    .then((item) => {
      return item.destroy();
    })
    .then((result) => {
      res.end();
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.todoCompleted = (req, res) => {
  const id = req.params.id;
  Todo.findByPk(id)
    .then((item) => {
      return item.update({ completed: true });
    })
    .then((result) => {
      console.log(result);
      res.end();
    });
};
