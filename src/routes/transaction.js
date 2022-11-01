const express = require("express");

const router = express.Router();
const { transactionController } = require("../controller/transaction");
const { validate } = require("../helpers/transaction");
const { protect } = require("../middleware/auth");

router
  .get("/", protect, transactionController.getTransaction)
  .get("/:id_transaction", protect, transactionController.getTransactionDetail)
  .post("/", protect, validate, transactionController.insertTransaction)
  .put("/:id_transaction", protect, transactionController.updateTransaction)
  .delete("/:id_transaction", protect, transactionController.deleteTransaction);

module.exports = router;
