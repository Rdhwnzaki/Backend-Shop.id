const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");
// const { validateRole } = require("../helpers/role");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");
// const { hitCache, clearCache } = require("../middleware/redis");

router
  .get("/", productsController.getProducts)
  .get("/detail/:id_product", productsController.getProductsDetail)
  .get("/category/:category_id", productsController.getProductsByCategory)
  .post(
    "/",
    // validateRole,
    // protect,
    upload.single("photo_product"),
    productsController.insertProduct
  )
  .put(
    "/:id_product",
    // protect,
    upload.single("photo_product"),

    productsController.updateProduct
  )
  .delete(
    "/:id_product",
    // protect,

    productsController.deleteProduct
  );

module.exports = router;
