const express = require("express");
const bodyParser = require("body-parser");

const productsRoutes = require("./src/routes/products");
const categoryRoutes = require("./src/routes/category");
const transactionRoutes = require("./src/routes/transaction");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/products", productsRoutes);
app.use("/category", categoryRoutes);
app.use("/transaction", transactionRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${port}`);
});
