const express = require("express");

const router = express.Router();
const { checkoutController } = require("../controller/checkout");
const { protect } = require("../middleware/auth");

router
  .post("/post-checkout", protect, checkoutController.postCheckout)
  .get("/get-checkout", protect, checkoutController.getCheckout)
  .get(
    "/get-checkout-delivered",
    protect,
    checkoutController.getCheckoutDelivered
  )
  .get("/get-checkout-seller", protect, checkoutController.getCheckoutSeller);

module.exports = router;
