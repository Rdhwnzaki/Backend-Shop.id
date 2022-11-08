const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { create, findEmail } = require("../model/users");
const { resp } = require("../middleware/common");
const { generateToken } = require("../helpers/auth");

const userController = {
  insertUsers: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email_user);
    if (users) {
      return resp(res, 404, false, "Email already use");
    }
    // const salt = bcrypt.genSaltSync(10);
    const password_user = bcrypt.hashSync(req.body.password_user);
    const data = {
      id_user: uuidv4(),
      email_user: req.body.email_user,
      password_user,
      fullname_user: req.body.fullname_user,
      role_user: req.params.role_user,
    };
    try {
      const result = await create(data);
      if (result) {
        resp(res, 200, true, "Register success");
      }
    } catch (err) {
      resp(res, 404, false, "Register failed");
    }
  },
  login: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email_user);
    if (!users) {
      return resp(res, 404, false, "Email not found");
    }
    const { password_user } = req.body;
    const validation = bcrypt.compareSync(password_user, users.password_user);
    if (!validation) {
      return resp(res, 404, false, "Wrong password ");
    }
    delete users.password_user;
    const payload = {
      email_user: users.email_user,
      role_user: users.role_user,
    };
    users.token = generateToken(payload);
    resp(res, 200, true, users, "Login success ");
  },
};
exports.userController = userController;
