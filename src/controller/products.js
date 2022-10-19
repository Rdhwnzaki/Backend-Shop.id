const modelProduct = require("../model/products");

const productsController = {
  update: (req, res) => {
    modelProduct
      .updateData(req.params.id_product, req.body)
      .then(() => res.send({ status: 200, message: "Berhasil memasukan data" }))
      .catch((err) => res.send({ message: "error", err }));
  },
  delete: (req, res) => {
    modelProduct
      .deleteData(req.params.id_product)
      .then(() => res.send({ status: 200, message: "Berhasil menghapus data" }))
      .catch(() => res.send({ message: "error" }));
  },
  getProducts: (_req, res) => {
    modelProduct
      .selectData()
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  insert: (req, res) => {
    modelProduct
      .insertData(req.body)
      .then(() => res.send({ status: 200, message: "Berhasil memasukan data" }))
      .catch(() => res.send({ message: "error" }));
  },
};
exports.productsController = productsController;
