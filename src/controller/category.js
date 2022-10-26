const modelCategory = require("../model/category");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");

const categoryController = {
  updateCategory: (req, res) => {
    modelCategory
      .updateCategory(req.params.id_category, req.body)
      .then(() => resp(res, 200, true, "Update category success"))
      .catch((err) => response(res, 404, false, err, "Update category failed"));
  },
  deleteCategory: (req, res) => {
    modelCategory
      .deleteCategory(req.params.id_category)
      .then(() => resp(res, 200, true, "Delete category success"))
      .catch((err) => response(res, 404, false, err, "Delete category failed"));
  },
  getCategory: (_req, res) => {
    modelCategory
      .selectCategory()
      .then((result) =>
        response(res, 200, true, result.rows, "Get category success")
      )
      .catch((err) => response(res, 404, false, err, "Get category failed"));
  },
  getCategoryDetail: (req, res) => {
    modelCategory
      .selectDataCategorybyId(req.params.id_category)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail category success")
      )
      .catch((err) =>
        response(res, 404, false, err, "Get detail category failed")
      );
  },
  insertCategory: (req, res) => {
    modelCategory
      .insertCategory(req.body)
      .then(() => resp(res, 200, true, "Insert category success"))
      .catch((err) => response(res, 404, false, err, "Insert category failed"));
  },
};
exports.categoryController = categoryController;
