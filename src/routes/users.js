const express = require("express");

const router = express.Router();
const { userController } = require("../controller/users");
const { validate } = require("../helpers/users");
const { role } = require("../middleware/auth");

router.post("/register/:role_user", validate, role, userController.insertUsers);
router.post("/refresh", userController.refresh);
router.post("/login", userController.login);
router.get("/:email_user/:otp", userController.otp);

module.exports = router;
