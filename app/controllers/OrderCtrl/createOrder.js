const $baseCtrl = require("../$baseCtrl");
const models = require("../../models");
const APIResponse = require("../../utils/APIResponse");

module.exports = $baseCtrl(async (req, res) => {
    req.body.customer = req.me.id
    const type = req.body.type
    if(!type) return APIResponse.BadRequest(res,'Type of order is required')
    let allowedTypes = ['follow','preview','project','remains']
    if(allowedTypes.indexOf(req.body.type) === -1)
        return APIResponse.BadRequest(res,`Type of order must be one of these ${allowedTypes}`)
    const order = await new models[type](req.body).save()
    return APIResponse.Created(res,order)
});
