const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const { APIResponse } = require("../../utils");

module.exports = $baseCtrl(
  async (req, res) => {  
   const emp = await models._user.findById(parseInt(req.params.id))
   if(!emp) return APIResponse.NotFound(res,'No Emp with that id')

   await emp.set({enabled: false}).save()

   return APIResponse.NoContent(res)
   
  }
);
