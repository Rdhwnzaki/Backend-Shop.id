const modelTransaction = require("../model/transaction");
const { response } = require("../middleware/common");
const { resp } = require("../middleware/common");

const transactionController = {
  updateTransaction: (req, res) => {
    modelTransaction
      .updateTransaction(req.params.id_transaction, req.body)
      .then(() => resp(res, 200, true, "Update transaction success"))
      .catch((err) =>
        response(res, 404, false, err, "Update transaction failed")
      );
  },
  deleteTransaction: (req, res) => {
    modelTransaction
      .deleteTransaction(req.params.id_transaction)
      .then(() => resp(res, 200, true, "Delete transaction success"))
      .catch((err) =>
        response(res, 404, false, err, "Delete transaction failed")
      );
  },
  getTransaction: (_req, res) => {
    modelTransaction
      .selectTransaction()
      .then((result) =>
        response(res, 200, true, result.rows, "Get transaction success")
      )
      .catch((err) => response(res, 404, false, err, "Get transaction failed"));
  },
  getTransactionDetail: (req, res) => {
    modelTransaction
      .selectDataTransactionbyId(req.params.id_transaction)
      .then((result) =>
        response(res, 200, true, result.rows, "Get detail transaction success")
      )
      .catch((err) =>
        response(res, 404, false, err, "Get detail transaction failed")
      );
  },
  insertTransaction: (req, res) => {
    modelTransaction
      .insertTransaction(req.body)
      .then(() => resp(res, 200, true, "Insert transaction success"))
      .catch((err) =>
        response(res, 404, false, err, "Insert transaction failed")
      );
  },
};
exports.transactionController = transactionController;
