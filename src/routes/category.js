const express = require("express");

const router = express.Router();
const { categoryController } = require("../controller/category");
const { handling } = require("../middleware/category");

router.get("/", categoryController.getCategory);
router.post("/", handling, categoryController.insertCategory);
router.put("/:id_category", categoryController.updateCategory);
router.delete("/:id_category", categoryController.deleteCategory);

module.exports = router;
