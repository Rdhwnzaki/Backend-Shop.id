const express = require("express");

const router = express.Router();
const { transactionController } = require("../controller/transaction");
const { validate } = require("../helpers/transaction");

router
  .get("/", transactionController.getTransaction)
  .get("/:id_transaction", transactionController.getTransactionDetail)
  .post("/", validate, transactionController.insertTransaction)
  .put("/:id_transaction", transactionController.updateTransaction)
  .delete("/:id_transaction", transactionController.deleteTransaction);

module.exports = router;
