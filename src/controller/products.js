const modelProduct = require("../model/products");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");

const productsController = {
  updateProduct: (req, res) => {
    modelProduct
      .updateDataProduct(req.params.id_product, req.body)
      .then(() => resp(res, 200, true, "Update product success"))
      .catch((err) => response(res, 404, false, err, "Update product failed"));
  },
  deleteProduct: (req, res) => {
    modelProduct
      .deleteDataProduct(req.params.id_product)
      .then(() => resp(res, 200, true, "Delete product success"))
      .catch((err) => response(res, 404, false, err, "Delete product failed"));
  },
  getProducts: (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sort = req.query.sort || "asc";
    const sortby = req.query.sortby || "id_product";
    const search = req.query.search || "";
    modelProduct
      .selectDataProduct(page, limit, sort, sortby, search)
      .then((result) =>
        response(res, 200, true, result.rows, "Get product success")
      )
      .catch((err) => response(res, 404, false, err, "Get product failed"));
  },
  getProductsDetail: (req, res) => {
    modelProduct
      .selectDataProductbyId(req.params.id_product)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail product success")
      )
      .catch((err) =>
        response(res, 404, false, err, "Get detail product failed")
      );
  },
  insertProduct: (req, res) => {
    modelProduct
      .insertDataProduct(req.body)
      .then(() => resp(res, 200, true, "Insert product success"))
      .catch((err) => response(res, 404, false, err, "Insert product failed"));
  },
};
exports.productsController = productsController;
