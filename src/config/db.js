const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shop_id",
  password: "muhammadzaki85",
  port: 5432,
});
module.exports = pool;
