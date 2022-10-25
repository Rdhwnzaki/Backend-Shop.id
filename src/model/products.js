/* eslint-disable no-console */
/* eslint-disable camelcase */
const Pool = require("../config/db");

const selectDataProduct = (page, limit, sort, sortby) =>
  new Promise((resolve, reject) => {
    const offset = (page - 1) * limit;
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category order by ${sortby} ${sort} limit ${limit} offset ${offset} `,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });

const insertDataProduct = (dataProducts) => {
  const {
    id_product,
    name_product,
    stock_product,
    price_product,
    category_id,
  } = dataProducts;

  return Pool.query(
    `INSERT INTO products(id_product, name_product, stock_product, price_product, category_id)VALUES(${id_product},'${name_product}',${stock_product},${price_product},${category_id})`
  );
};

// eslint-disable-next-line no-unused-vars
const sortDataProduct = (sort) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category order by id_product ${sort}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
const searchDataProduct = (search) =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
      FROM products
      INNER JOIN category
      ON products.category_id = category.id_category where name_product ilike '%${search}%' order by name_product asc`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
const listDataProduct = () =>
  new Promise((resolve, reject) => {
    Pool.query(
      `select products.name_product,products.stock_product,products.price_product,category.name_category as category
    FROM products
    INNER JOIN category
    ON products.category_id = category.id_category`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
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
  insertDataProduct,
  deleteDataProduct,
  updateDataProduct,
  listDataProduct,
  sortDataProduct,
  searchDataProduct,
};
