const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const { APIResponse } = require("../../utils");
const bcrypt = require("bcryptjs");
const cloudinaryStorage = require("../../services/cloudinaryStorage");

module.exports = $baseCtrl(
  [{ name: "photo", maxCount: 1 }],
  cloudinaryStorage,
  async (req, res) => {  

    // Check if E-mail Already Exist
    let user = await models._user.findOne({ email: req.body.email });
    if (user) {
      return APIResponse.BadRequest(res, " Email Already in use .");
    }

    // Check if phone Already Exist
    if (req.body.phone) {
      let existPhone = await models._user.findOne({ phone: req.body.phone });
      if (existPhone) {
        return APIResponse.BadRequest(res, " phone Already in use .");
      }
    }

    // Encrypt Password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    // Upload photo if enter by user
    if (req.files && req.files["photo"]) {
      req.body.photo = req.files["photo"][0].secure_url;
    }
    // save user to db
    const newUser = await new models._user(req.body).save();

    return APIResponse.Created(res, newUser);
  }
);
