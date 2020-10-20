const mongoose = require("mongoose");
const OrderModel = require("./_order.model");

const schema = new mongoose.Schema({
   nameOfOwner:{
       type: String,
       required: true
   },
   activity:{
       type: String,
       required: true
   },
   company:{
       type: String,
       required: true
   }
}, { discriminatorKey: "type" });
module.exports = OrderModel.discriminator("preview", schema);
