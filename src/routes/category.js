const express = require("express");

const router = express.Router();
const { categoryController } = require("../controller/category");
const { validate } = require("../helpers/category");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");

router
  .get("/", categoryController.getCategory)
  .get("/:id_category", protect, categoryController.getCategoryDetail)
  .post("/", upload.single("photo_category"), categoryController.insertCategory)
  .put(
    "/:id_category",
    upload.single("photo_category"),
    categoryController.updateCategory
  )
  .delete("/:id_category", protect, categoryController.deleteCategory);

module.exports = router;
