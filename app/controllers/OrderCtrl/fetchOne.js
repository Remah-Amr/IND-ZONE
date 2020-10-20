const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const APIResponse = require("../../utils/APIResponse");

module.exports = $baseCtrl(async (req, res) => {
    const order = await models._order.findById(parseInt(req.params.id))
    if(!order) return APIResponse.NotFound(res,'No order with that id ')

    return APIResponse.Ok(res,order)
});
