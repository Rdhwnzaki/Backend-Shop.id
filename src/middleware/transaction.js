/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const handling = (req, res, next) => {
  const {
    id_transaction,
    email_transaction,
    product_id,
    amount_transaction,
    total_transaction,
  } = req.body;
  try {
    if (id_transaction === 0) throw Error("Id cannot be empty");
    if (email_transaction === "") throw Error("Email cannot be empty");
    if (product_id === 0) throw Error("Product Id cannot be empty");
    if (amount_transaction === 0) throw Error("Amount cannot be empty");
    if (total_transaction === 0) throw Error("Total cannot be empty");
  } catch (err) {
    return res.send(err.message);
  }
  next();
};

module.exports = { handling };
