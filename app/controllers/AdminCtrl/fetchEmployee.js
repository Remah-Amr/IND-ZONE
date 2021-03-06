const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const { APIResponse } = require("../../utils");

module.exports = $baseCtrl(
  async (req, res) => {  
    const employees = await models._user.find({role: {$in : ['accountant','secretary','technician','treasury']},enabled: true})

    return APIResponse.Ok(res,employees)
   
  }
);
