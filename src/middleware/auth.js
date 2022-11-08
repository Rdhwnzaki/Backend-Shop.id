const jwt = require("jsonwebtoken");
const { resp } = require("./common");

const key = process.env.JWT_KEY;

const role = (req, res, next) => {
  if (req.params.role_user === "toko" || req.params.role_user === "custommer") {
    return next();
  }
  return resp(res, 404, false, "Wrong role user ");
};
const protect = (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      const auth = req.headers.authorization;
      token = auth.split(" ")[1];
      const decode = jwt.verify(token, key);
      req.payload = decode;
      next();
    } else {
      return resp(res, 404, false, "Server need token ");
    }
  } catch (err) {
    console.log(err);
    if (err && err.name === "JsonWebTokenError") {
      resp(res, 404, false, "Invalid token ");
    } else if (err && err.name === "TokenExpiredError") {
      return resp(res, 404, false, "Expired token ");
    } else {
      return resp(res, 404, false, "Token not active ");
    }
  }
};
module.exports = { role, protect };
