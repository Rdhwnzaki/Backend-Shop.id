/* eslint-disable camelcase */
const Pool = require("../config/db");

const selectCategory = () => Pool.query("SELECT * FROM category");

const insertCategory = (dataCategory) => {
  const { id_category, name_category } = dataCategory;

  return Pool.query(
    `INSERT INTO category(id_category, name_category)VALUES(${id_category},'${name_category}')`
  );
};
const updateCategory = (id_category, dataCategory) => {
  const { name_category } = dataCategory;
  return Pool.query(
    `UPDATE category SET name_category='${name_category}' WHERE id_category='${id_category}'`
  );
};

const deleteCategory = (id_category) =>
  Pool.query(`DELETE FROM category where id_category='${id_category}'`);

module.exports = {
  selectCategory,
  insertCategory,
  deleteCategory,
  updateCategory,
};
