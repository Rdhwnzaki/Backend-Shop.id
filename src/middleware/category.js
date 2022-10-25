/* eslint-disable camelcase */
/* eslint-disable consistent-return */

const handling = (req, res, next) => {
  const { id_category, name_category } = req.body;
  try {
    if (id_category === 0) throw Error("Id cannot be empty");
    if (name_category === "") throw Error("Name cannot be empty");
  } catch (err) {
    return res.send(err.message);
  }
  next();
};

module.exports = { handling };
