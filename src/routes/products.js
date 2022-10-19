const express = require("express");

const router = express.Router();
const { productsController } = require("../controller/products");

router.get("/", productsController.getProducts);
router.post("/", productsController.insert);
router.put("/:id_product", productsController.update);
router.delete("/:id_product", productsController.delete);

module.exports = router;
