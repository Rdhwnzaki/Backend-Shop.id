const Pool = require("../config/db");

const insertCheckout = (user_id, dataCheckout) => {
  const { transaction_id, seller_id, product_id } = dataCheckout;
  return Pool.query(
    `INSERT INTO checkout(transaction_id,user_id,seller_id,product_id,status_id)VALUES(${transaction_id},'${user_id}','${seller_id}',${product_id},0)`
  );
};

const selectCheckout = (user_id) =>
  Pool.query(
    `SELECT checkout.*,transaction.qty_transaction,transaction.total_transaction,products.name_product,products.price_product,status.name_status,users.fullname_user,users.address_user FROM checkout INNER JOIN transaction ON checkout.transaction_id=transaction.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.user_id='${user_id}'`
  );

const selectCheckoutSeller = (user_id) =>
  Pool.query(
    `SELECT checkout.*,transaction.qty_transaction,transaction.total_transaction,products.name_product,products.price_product,status.name_status,users.fullname_user,users.address_user FROM checkout INNER JOIN transaction ON checkout.transaction_id=transaction.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.seller_id='${user_id}' AND checkout.status_id=0`
  );

const selectCheckoutDelivered = (user_id) =>
  Pool.query(
    `SELECT checkout.*,transaction.qty_transaction,transaction.total_transaction,products.name_product,products.price_product,status.name_status,users.fullname_user,users.address_user FROM checkout INNER JOIN transaction ON checkout.transaction_id=transaction.id_transaction INNER JOIN products ON checkout.product_id=products.id_product INNER JOIN status ON checkout.status_id=status.id_status INNER JOIN users ON checkout.user_id=users.id_user WHERE checkout.seller_id='${user_id}' AND checkout.status_id=1`
  );

module.exports = {
  insertCheckout,
  selectCheckout,
  selectCheckoutSeller,
  selectCheckoutDelivered,
};
