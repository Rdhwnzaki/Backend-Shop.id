const multer = require("multer");
const { response } = require("./common");
const { resp } = require("./common");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    const uniq = Date.now() + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniq + ".png");
  },
  // fileFilter: function (req, res, file, cb) {
  //   if (file.mimetype === "png" && file.mimetype === "jpg") {
  //     return resp(res, 404, false, "Update product success");
  //   }
  //   cb(null, true);
  // },
});
const upload = multer({ storage });
module.exports = upload;
