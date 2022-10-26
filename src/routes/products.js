const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");
const { validate } = require("../helpers/product");

router
  .get("/", productsController.getProducts)
  .get("/:id_product", productsController.getProductsDetail)
  .post("/", validate, productsController.insertProduct)
  .put("/:id_product", productsController.updateProduct)
  .delete("/:id_product", productsController.deleteProduct);

module.exports = router;
