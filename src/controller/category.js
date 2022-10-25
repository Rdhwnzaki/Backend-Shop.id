const modelCategory = require("../model/category");

const categoryController = {
  updateCategory: (req, res) => {
    modelCategory
      .updateCategory(req.params.id_category, req.body)
      .then(() =>
        res.send({ status: 200, message: "Berhasil mengupdate data" })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  deleteCategory: (req, res) => {
    modelCategory
      .deleteCategory(req.params.id_category)
      .then(() => res.send({ status: 200, message: "Berhasil menghapus data" }))
      .catch(() => res.send({ message: "error" }));
  },
  getCategory: (_req, res) => {
    modelCategory
      .selectCategory()
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  insertCategory: (req, res) => {
    modelCategory
      .insertCategory(req.body)
      .then(() => res.send({ status: 200, message: "Berhasil memasukan data" }))
      .catch((err) => res.send({ message: "error", err }));
  },
};
exports.categoryController = categoryController;
