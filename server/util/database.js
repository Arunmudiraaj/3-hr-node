const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "lonewarrior70951", {
  dialect: "mysql",
});

module.exports = sequelize;
