const express = require("express");

const router = express.Router();
const { categoryController } = require("../controller/category");
const { validate } = require("../helpers/category");
const { protect } = require("../middleware/auth");

router
  .get("/", protect, categoryController.getCategory)
  .get("/:id_category", protect, categoryController.getCategoryDetail)
  .post("/", protect, validate, categoryController.insertCategory)
  .put("/:id_category", protect, categoryController.updateCategory)
  .delete("/:id_category", protect, categoryController.deleteCategory);

module.exports = router;
