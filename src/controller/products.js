// const { createClient } = require("redis");
const modelProduct = require("../model/products");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");
const cloudinary = require("../config/photo");

// const client = createClient(6379);

// client.on("error", (err) => console.log("Redis Client Error", err));

// client.connect();

const productsController = {
  updateProduct: async (req, res) => {
    try {
      req.body.stock_product = parseInt(req.body.stock_product);
      req.body.price_product = parseInt(req.body.price_product);
      req.body.category_id = parseInt(req.body.category_id);

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "shop.id",
      });

      req.body.photo_product = image.url;
      await modelProduct.updateDataProduct(req.params.id_product, req.body);
      return response(res, 200, true, req.body, "Update Data Success");
    } catch (err) {
      return response(res, 404, false, err, "Update Data Fail");
    }
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
  getProductsDetail: async (req, res) => {
    try {
      const result = await modelProduct.selectDataProductbyId(
        req.params.id_product
      );
      response(res, 200, true, result.rows, "get product success");
    } catch (error) {
      console.log(error);
      response(res, 404, false, "get product failed");
    }
  },
  getProductsByCategory: async (req, res) => {
    try {
      const result = await modelProduct.selectDataProductbyCategory(
        req.params.category_id
      );
      response(res, 200, true, result.rows, "get product by category success");
    } catch (error) {
      console.log(error);
      response(res, 404, false, "get product by category failed");
    }
  },
  insertProduct: async (req, res) => {
    try {
      req.body.stock_product = parseInt(req.body.stock_product);
      req.body.price_product = parseInt(req.body.price_product);
      req.body.category_id = parseInt(req.body.category_id);

      const image = await cloudinary.uploader.upload(req.file.path, {
        folder: "shop.id",
      });

      req.body.photo_product = image.url;
      await modelProduct.insertDataProduct(req.body);
      return response(res, 200, true, req.body, "Input Data Success");
    } catch (err) {
      return response(res, 404, false, err, "Input Data Fail");
    }
  },
};
exports.productsController = productsController;
