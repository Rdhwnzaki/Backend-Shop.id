const express = require("express");

const router = express.Router();
const productsRoutes = require("./products");
const categoryRoutes = require("./category");
const transactionRoutes = require("./transaction");
const userRoutes = require("./users");

router
  .use("/products", productsRoutes)
  .use("/category", categoryRoutes)
  .use("/transaction", transactionRoutes)
  .use("/users", userRoutes);

module.exports = router;
