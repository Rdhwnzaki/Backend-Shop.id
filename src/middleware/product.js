/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const handling = (req, res, next) => {
  const {
    id_product,
    name_product,
    stock_product,
    price_product,
    category_id,
  } = req.body;
  try {
    if (id_product === 0) throw Error("Id cannot be empty");
    if (name_product === "") throw Error("Name cannot be empty");
    if (stock_product === 0) throw Error("Stock cannot be empty");
    if (price_product === 0) throw Error("Price cannot be empty");
    if (category_id === 0) throw Error("Category Id cannot be empty");
  } catch (err) {
    return res.send(err.message);
  }
  next();
};

module.exports = { handling };
