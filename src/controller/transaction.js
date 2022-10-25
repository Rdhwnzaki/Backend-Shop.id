const modelTransaction = require("../model/transaction");

const transactionController = {
  updateTransaction: (req, res) => {
    modelTransaction
      .updateTransaction(req.params.id_transaction, req.body)
      .then(() =>
        res.send({ status: 200, message: "Berhasil mengupdate data" })
      )
      .catch((err) => res.send({ message: "error", err }));
  },
  deleteTransaction: (req, res) => {
    modelTransaction
      .deleteTransaction(req.params.id_transaction)
      .then(() => res.send({ status: 200, message: "Berhasil menghapus data" }))
      .catch(() => res.send({ message: "error" }));
  },
  getTransaction: (_req, res) => {
    modelTransaction
      .selectTransaction()
      .then((result) => res.send({ result: result.rows }))
      .catch(() => res.send({ message: "error" }));
  },
  insertTransaction: (req, res) => {
    modelTransaction
      .insertTransaction(req.body)
      .then(() => res.send({ status: 200, message: "Berhasil memasukan data" }))
      .catch((err) => res.send({ message: "error", err }));
  },
};
exports.transactionController = transactionController;
