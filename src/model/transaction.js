const Pool = require("../config/db");

const selectTransaction = () => Pool.query("SELECT * FROM transaction");

const selectDataTransactionbyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select * from transaction where id_transaction = '${id}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertTransaction = (dataTransaction) => {
  const {
    email_transaction,
    product_id,
    amount_transaction,
    total_transaction,
  } = dataTransaction;

  return Pool.query(
    `INSERT INTO transaction(email_transaction,product_id,amount_transaction,total_transaction)VALUES('${email_transaction}','${product_id}','${amount_transaction}','${total_transaction}')`
  );
};
const updateTransaction = (id_transaction, dataTransaction) => {
  const {
    email_transaction,
    product_id,
    amount_transaction,
    total_transaction,
  } = dataTransaction;
  return Pool.query(
    `UPDATE transaction SET email_transaction='${email_transaction}',product_id='${product_id}',amount_transaction='${amount_transaction}',total_transaction='${total_transaction}' WHERE id_transaction='${id_transaction}'`
  );
};

const deleteTransaction = (id_transaction) =>
  Pool.query(
    `DELETE FROM transaction where id_transaction='${id_transaction}'`
  );

module.exports = {
  selectTransaction,
  selectDataTransactionbyId,
  insertTransaction,
  deleteTransaction,
  updateTransaction,
};
