const express = require("express");
const routes = express.Router();
const productController = require("../controllers/product");
routes.get("/all", productController.getAllProducts);
routes.post("/add", productController.addProduct);
routes.delete("/delete/:id", productController.deleteProduct);

module.exports = routes;
