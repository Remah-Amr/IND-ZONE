const mongoose = require("mongoose");
const $baseModel = require("../$baseModel");


const schema = new mongoose.Schema(
  {
    customer: {
        type: Number,
        ref: 'customer'
    }
  },
  { timestamps: true, discriminatorKey: "type" }
);

const response = (doc) => {
  return {
    id: doc.id,
    customer: doc.customer,
    numberOfRemains: doc.numberOfRemains, // remains
    fees: doc.fees, // remains
    specifiedArea:doc.specifiedArea, // follow
    usedArea: doc.usedArea, // follow
    openArea:doc.openArea, // follow
    LegalStructuralRatio:doc.LegalStructuralRatio, // follow
    structuralRatioOnNature:doc.structuralRatioOnNature, // follow
    statusOfBuildingPermit:doc.statusOfBuildingPermit, // follow
    statusOfOperating:doc.statusOfOperating, // follow
    violations:doc.violations, // follow
    reportPreviewOnNature:doc.reportPreviewOnNature, // follow
    notes:doc.notes,  // follow
    holderOfTheSite: doc.holderOfTheSite,
    activity:doc.activity, // follow & preview
    company: doc.company, // preview
    nameOfOwner: doc.nameOfOwner, // preview & project
    nameOfProject: doc.nameOfProject, 
    city: doc.city, // project
    nationality:doc.nationality,// project
    industrialArea:doc.industrialArea,// project
    acitivity:doc.acitivity,// project
    requiredArea:doc.requiredArea,// project
    workingCapital:doc.workingCapital,// project
    cost: doc.cost,// project
    employment:doc.employment,// project
    legalStatus:doc.legalStatus,// project
    duration:doc.duration,// project
    marketingSystem:doc.marketingSystem,// project
    expectedAnnualProductionAmount:doc.expectedAnnualProductionAmount,// project
    type: doc.type,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
  };
};

module.exports = $baseModel("order", schema, {
  responseFunc: response
});
