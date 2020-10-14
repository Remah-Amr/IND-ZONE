const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const { APIResponse } = require("../../utils");
const bcrypt = require("bcryptjs");
const cloudinaryStorage = require("../../services/cloudinaryStorage");

module.exports = $baseCtrl(
  [{ name: "photo", maxCount: 1 }],
  cloudinaryStorage,
  async (req, res) => {  

    // Check if E-mail,phone,national number Already Exist
    let user = await models._user.findOne({ 
      $or:[
        {email: req.body.email},
        { phone: req.body.phone},
        {nationalNumber: req.body.nationalNumber}
      ] });
    if (user) {
      return APIResponse.BadRequest(res, " Email/Phone/nationalNumber Already in use .");
    }

    // // Check if phone Already Exist
    // if (req.body.phone) {
    //   let existPhone = await models._user.findOne({ phone: req.body.phone });
    //   if (existPhone) {
    //     return APIResponse.BadRequest(res, " phone Already in use .");
    //   }
    // }

    // // Check if national number Already Exist
    // if (req.body.nationalNumber) {
    //   let existnationalNumber = await models._user.findOne({ nationalNumber: req.body.nationalNumber });
    //   if (existnationalNumber) {
    //     return APIResponse.BadRequest(res, " nationalNumber Already in use .");
    //   }
    // }

    // Encrypt Password
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash;

    // Upload photo if enter by user
    if (req.files && req.files["photo"]) {
      req.body.photo = req.files["photo"][0].secure_url;
    }

    req.body.enabled = true

    // save user to db
    const newUser = await new models._user(req.body).save();

    return APIResponse.Created(res, newUser);
  }
);
