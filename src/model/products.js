const Pool = require("../config/db");

const selectDataProduct = (page, limit, sort, sortby, search) =>
  new Promise((resolve, reject) => {
    const offset = (page - 1) * limit;
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where (name_product) ilike '%${search}%' order by ${sortby} ${sort} limit ${limit} offset ${offset} `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const selectDataProductbyId = (id) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where id_product = '${id}' `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
const insertDataProduct = (dataProducts) => {
  const { name_product, stock_product, price_product, category_id } =
    dataProducts;

  return Pool.query(
    `INSERT INTO products(name_product, stock_product, price_product, category_id)VALUES('${name_product}',${stock_product},${price_product},${category_id})`
  );
};
const updateDataProduct = (id_product, dataProducts) => {
  const { name_product, stock_product, price_product, category_id } =
    dataProducts;
  return Pool.query(
    `UPDATE products SET name_product='${name_product}',stock_product='${stock_product}',price_product='${price_product}',category_id='${category_id}' WHERE id_product='${id_product}'`
  );
};

const deleteDataProduct = (id_product) =>
  Pool.query(`DELETE FROM products where id_product='${id_product}'`);

module.exports = {
  selectDataProduct,
  selectDataProductbyId,
  insertDataProduct,
  deleteDataProduct,
  updateDataProduct,
};
