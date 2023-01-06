const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { create, findEmail, verification } = require("../model/users");
const { resp, response } = require("../middleware/common");
const { generateToken, generateRefreshToken } = require("../helpers/auth");
const email = require("../middleware/email");

const Port = process.env.PORT;
const Host = process.env.HOST;

const userController = {
  insertUsers: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email_user);
    if (users) {
      return resp(res, 404, false, "Email already use");
    }

    const digits = "0123456789";
    let otp = "";
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 6; i++) {
      otp += digits[Math.floor(Math.random() * 10)];
    }
    const salt = bcrypt.genSaltSync(10);
    const password_user = bcrypt.hashSync(req.body.password_user);
    const data = {
      id_user: uuidv4(),
      email_user: req.body.email_user,
      password_user,
      fullname_user: req.body.fullname_user,
      role_user: req.params.role_user,
      otp,
    };
    try {
      const result = await create(data);
      if (result) {
        // const verifUrl = `http://${Host}:${Port}/users/${req.body.email_user}/${otp}`;
        const sendEmail = email(data.email_user, otp, data.fullname_user);
        // eslint-disable-next-line eqeqeq
        if (sendEmail == "email not sent!") {
          return response(res, 404, false, null, "register fail");
        }
        response(
          res,
          200,
          true,
          { email_user: data.email_user },
          "register success please check your email"
        );
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
    // eslint-disable-next-line eqeqeq
    if (users.verif == 0) {
      return response(res, 404, false, null, " email not verified");
    }
    const { password_user } = req.body;
    const validation = bcrypt.compareSync(password_user, users.password_user);
    if (!validation) {
      return resp(res, 404, false, "Wrong password ");
    }
    delete users.password_user;
    delete users.otp;
    delete users.verif;

    const payload = {
      email_user: users.email_user,
      role_user: users.role_user,
    };
    users.token = generateToken(payload);
    users.refreshToken = generateRefreshToken(payload);
    resp(res, 200, true, users, "Login success ");
  },
  refresh: async (req, res) => {
    const {
      rows: [users],
    } = await findEmail(req.body.email_user);
    if (!users) {
      return resp(res, 404, false, "Email not found");
    }
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return resp(res, 404, false, "Wrong refresh token ");
    }
    const payload = {
      email_user: users.email_user,
      role_user: users.role_user,
    };
    users.newToken = generateToken(payload);
    resp(res, 200, true, users, "Success get new token ");
  },
  otp: async (req, res) => {
    console.log("email", req.body.email_user);
    console.log("password", req.body.otp);
    const {
      rows: [users],
    } = await findEmail(req.body.email_user);
    if (!users) {
      return response(res, 404, false, null, " email not found");
    }
    // eslint-disable-next-line eqeqeq
    if (users.otp == req.body.otp) {
      const result = await verification(req.body.email_user);
      return response(res, 200, true, result, " verification email success");
    }
    return response(
      res,
      404,
      false,
      null,
      " wrong otp please check your email"
    );
  },
  profile: async (req, res, next) => {
    try {
      const { id_user } = req.payload;
      const {
        rows: [users],
      } = await findUsers(id_user);

      if (users.role === "toko") {
        const result = await profileToko(id_user);
        response(res, 200, true, result.rows, "Get user toko success");
      } else if (users.role === "custommer") {
        const result = await profileCustommer(id_user);
        response(res, 200, true, result.rows, "Get user custommer success");
      } else {
        response(res, 404, false, null, "Role not found");
      }
    } catch (error) {
      response(res, 404, error, "Data not found");
    }
  },
};
exports.userController = userController;
