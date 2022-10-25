const express = require("express");

const router = express.Router();
const { transactionController } = require("../controller/transaction");
const { handling } = require("../middleware/transaction");

router.get("/", transactionController.getTransaction);
router.post("/", handling, transactionController.insertTransaction);
router.put("/:id_transaction", transactionController.updateTransaction);
router.delete("/:id_transaction", transactionController.deleteTransaction);

module.exports = router;
