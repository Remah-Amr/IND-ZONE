const mongoose = require("mongoose");
const OrderModel = require("./_order.model");

const schema = new mongoose.Schema({
    specifiedArea:{
        type: String,
        required: true
    },
    usedArea: {
        type: String,
        required: true
    },
    openArea:{
        type: String,
        required: true
    },
    LegalStructuralRatio:{
        type: Number,
        required: true
    },
    structuralRatioOnNature:{
        type: Number,
        required: true
    },
    statusOfBuildingPermit:{
        type: String,
        required: true
    },
    statusOfOperating:{
        type: String,
        required: true
    },
    activity:{
        type: String,
        required: true
    },
    violations:{
        type: String,
        required: true
    },
    reportPreviewOnNature:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required:true
    }   
}, { discriminatorKey: "type" });
module.exports = OrderModel.discriminator("follow", schema);
