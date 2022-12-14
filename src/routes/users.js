const express = require("express");

const router = express.Router();
const { userController } = require("../controller/users");
const { validate } = require("../helpers/users");
const { role } = require("../middleware/auth");
const { protect } = require("../middleware/auth");
const upload = require("../middleware/upload");

router.post("/register/:role_user", validate, userController.insertUsers);
router.post("/refresh", userController.refresh);
router.post("/login", userController.login);
router.post("/verif", userController.otp);
router.get("/profile", protect, userController.getUser);
router.put(
  "/edit-profile",
  protect,
  upload.single("photo_user"),
  userController.editProfile
);

module.exports = router;
