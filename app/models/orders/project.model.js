const mongoose = require("mongoose");
const OrderModel = require("./_order.model");

const schema = new mongoose.Schema({
    nameOfOwner: {
        type:String,
        required: true
    },
    nameOfProject:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    nationality:{
        type: String,
        required: true
    },
    industrialArea:{
        type: String,
        required: true
    },
    activity:{
        type: String,
        required: true
    },
    requiredArea:{
        type: String,
        required: true
    },
    workingCapital:{
        type: Number,
        required: true
    },
    cost: {
        type : Number,
        required: true
    },
    employment:{
        type : Number,
        required: true
    },
    legalStatus:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    marketingSystem:{
        type: String,
        required: true
    },
    expectedAnnualProductionAmount:{
        type: String,
        required: true
    }
}, { discriminatorKey: "type" });
module.exports = OrderModel.discriminator("project", schema);
