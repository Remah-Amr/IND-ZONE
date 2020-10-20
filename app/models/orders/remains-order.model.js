const mongoose = require("mongoose");
const OrderModel = require("./_order.model");

const schema = new mongoose.Schema({
    numberOfRemains:{
        type: Number,
        required: true
    },
    fees: {
        type: Number,
        required: true
    }
}, { discriminatorKey: "type" });
module.exports = OrderModel.discriminator("remains", schema);
