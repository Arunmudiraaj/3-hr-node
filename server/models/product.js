const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
});

module.exports = Product;
