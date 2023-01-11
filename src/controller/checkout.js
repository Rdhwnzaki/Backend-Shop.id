const modelCheckout = require("../model/checkout");
const { response } = require("../middleware/common");

const checkoutController = {
  postCheckout: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log("id_user", user_id);

      req.body.transaction_id = parseInt(req.body.transaction_id);
      req.body.product_id = parseInt(req.body.product_id);
      req.body.status_id = parseInt(req.body.status_id);
      await modelCheckout.insertCheckout(user_id, req.body);
      return response(res, 200, true, req.body, "Input checkout succes");
    } catch (err) {
      console.log(err);
      return response(res, 404, false, err, "Input checkout fail");
    }
  },
  getCheckout: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelCheckout.selectCheckout(user_id);
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
  getCheckoutSeller: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelCheckout.selectCheckoutSeller(user_id);
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
  getCheckoutDelivered: async (req, res) => {
    try {
      const user_id = req.payload.id_user;
      console.log(user_id);
      const result = await modelCheckout.selectCheckoutDelivered(user_id);
      response(res, 200, true, result.rows, "Get checkout success");
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Get checkout fail");
    }
  },
};
exports.checkoutController = checkoutController;
