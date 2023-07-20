const Product = require("../models/product");

module.exports.getAllProducts = (req, res) => {
  Product.findAll()
    .then((result) => {
      console.log(result);
      const newData = result.map((item) => item.dataValues);
      res.json(newData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.addProduct = (req, res) => {
  const { name, price } = req.body;
  Product.create({
    name: name,
    price: price,
  })
    .then((result) => {
      console.log(result);
      res.json(result.dataValues);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  Product.findByPk(id)
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
