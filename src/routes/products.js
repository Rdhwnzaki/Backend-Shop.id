const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");
const { handling } = require("../middleware/product");

router
  .get("/", productsController.getProducts)
  .get("/list", productsController.getProductsList)
  .get("/sort", productsController.getProductSort)
  .get("/search", productsController.getProductSearch)
  .post("/", handling, productsController.insertProduct)
  .put("/:id_product", productsController.updateProduct)
  .delete("/:id_product", productsController.deleteProduct);

module.exports = router;
