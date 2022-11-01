const { createClient } = require("redis");
const modelProduct = require("../model/products");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");

const client = createClient(6379);

client.on("error", (err) => console.log("Redis Client Error", err));

client.connect();

const productsController = {
  updateProduct: (req, res) => {
    const port = process.env.PORT;
    const host = process.env.HOST;
    const photo_product = req.file.filename;
    const uri = `http://${host}:${port}/img/${photo_product}`;
    req.body.photo_product = uri;
    req.body.stock_product = parseInt(req.body.stock_product);
    req.body.price_product = parseInt(req.body.price_product);
    req.body.category_id = parseInt(req.body.category_id);
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
      .then((result) => {
        client.setEx(
          `product/${req.params.id_product}`,
          60 * 60,
          JSON.stringify(result.rows)
        );
        response(res, 200, true, result.rows, "Get detail product success");
      })
      .catch((err) =>
        response(res, 404, false, err, "Get detail product failed")
      );
  },
  insertProduct: (req, res) => {
    const port = process.env.PORT;
    const host = process.env.HOST;
    const photo_product = req.file.filename;
    const uri = `http://${host}:${port}/img/${photo_product}`;
    req.body.photo_product = uri;
    req.body.stock_product = parseInt(req.body.stock_product);
    req.body.price_product = parseInt(req.body.price_product);
    req.body.category_id = parseInt(req.body.category_id);
    modelProduct
      .insertDataProduct(req.body)
      .then(() => resp(res, 200, true, "Insert product success"))
      .catch((err) => response(res, 404, false, err, "Insert product failed"));
  },
};
exports.productsController = productsController;
