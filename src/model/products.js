const Pool = require("../config/db");

const selectData = () => Pool.query("SELECT * FROM products");

const insertData = (dataProducts) => {
  // eslint-disable-next-line camelcase
  const { id_product, name_product, stock_product, price_product } =
    dataProducts;
  // eslint-disable-next-line camelcase
  return Pool.query(
    // eslint-disable-next-line camelcase
    `INSERT INTO products(id_product, name_product, stock_product, price_product)VALUES(${id_product},'${name_product}',${stock_product},${price_product})`
  );
};
// eslint-disable-next-line camelcase
const updateData = (id_product, dataProducts) => {
  // eslint-disable-next-line camelcase
  const { name_product, stock_product, price_product } = dataProducts;
  return Pool.query(
    // eslint-disable-next-line camelcase
    `UPDATE products SET name_product='${name_product}',stock_product='${stock_product}',price_product='${price_product}' WHERE id_product='${id_product}'`
  );
};

// eslint-disable-next-line camelcase
const deleteData = (id_product) =>
  // eslint-disable-next-line camelcase
  Pool.query(`DELETE FROM products where id_product='${id_product}'`);

module.exports = { selectData, insertData, deleteData, updateData };
