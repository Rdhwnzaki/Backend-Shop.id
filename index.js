const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const helmet = require("helmet");
const xss = require("xss-clean");

const productsRoutes = require("./src/routes/products");
const categoryRoutes = require("./src/routes/category");
const transactionRoutes = require("./src/routes/transaction");

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(xss());

app.use(bodyParser.json());
app.use("/products", productsRoutes);
app.use("/category", categoryRoutes);
app.use("/transaction", transactionRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
