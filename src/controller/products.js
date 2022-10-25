const modelProduct = require("../model/products");

const productsController = {
  updateProduct: (req, res) => {
    modelProduct
      .updateDataProduct(req.params.id_product, req.body)
      .then(() =>
        res.send({ status: 200, message: "Berhasil mengupdate data" })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  deleteProduct: (req, res) => {
    modelProduct
      .deleteDataProduct(req.params.id_product)
      .then(() => res.send({ status: 200, message: "Berhasil menghapus data" }))
      .catch(() => res.send({ message: "error" }));
  },
  getProducts: (req, res) => {
    const { page } = req.query;
    const { limit } = req.query;
    const { sort } = req.query;
    const { sortby } = req.query;
    modelProduct
      .selectDataProduct(page, limit, sort, sortby)
      .then((result) => {
        res.json(result.rows);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getProductsList: (req, res) => {
    modelProduct
      .listDataProduct()
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  getProductSort: (req, res) => {
    const { sort } = req.query;
    modelProduct
      .sortDataProduct(sort)
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  getProductSearch: (req, res) => {
    const { search } = req.query;
    modelProduct
      .searchDataProduct(search)
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  insertProduct: (req, res) => {
    modelProduct
      .insertDataProduct(req.body)
      .then(() => res.send({ status: 200, message: "Berhasil memasukan data" }))
      .catch(() => res.send({ message: "error" }));
  },
};
exports.productsController = productsController;
