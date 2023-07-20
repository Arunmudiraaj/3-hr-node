const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Todo;
