const express = require("express");

const router = express.Router();
const { categoryController } = require("../controller/category");
const { validate } = require("../helpers/category");

router
  .get("/", categoryController.getCategory)
  .get("/:id_category", categoryController.getCategoryDetail)
  .post("/", validate, categoryController.insertCategory)
  .put("/:id_category", categoryController.updateCategory)
  .delete("/:id_category", categoryController.deleteCategory);

module.exports = router;
