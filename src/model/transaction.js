/* eslint-disable camelcase */
const Pool = require("../config/db");

const selectTransaction = () => Pool.query("SELECT * FROM transaction");

const insertTransaction = (dataTransaction) => {
  const {
    id_transaction,
    email_transaction,
    product_id,
    amount_transaction,
    total_transaction,
  } = dataTransaction;

  return Pool.query(
    `INSERT INTO transaction(id_transaction,email_transaction,product_id,amount_transaction,total_transaction)VALUES(${id_transaction},'${email_transaction}','${product_id}','${amount_transaction}','${total_transaction}')`
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
  insertTransaction,
  deleteTransaction,
  updateTransaction,
};
