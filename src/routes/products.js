const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");
// const { validate } = require("../helpers/product");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");
const { hitCache, clearCache } = require("../middleware/redis");

router
  .get("/", protect, productsController.getProducts)
  .get("/:id_product", protect, hitCache, productsController.getProductsDetail)
  .post(
    "/",
    protect,
    upload.single("photo_product"),
    productsController.insertProduct
  )
  .put(
    "/:id_product",
    protect,
    upload.single("photo_product"),
    clearCache,
    productsController.updateProduct
  )
  .delete(
    "/:id_product",
    protect,
    clearCache,
    productsController.deleteProduct
  );

module.exports = router;
